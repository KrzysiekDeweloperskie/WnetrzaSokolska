"use client";

import DOMPurify from "isomorphic-dompurify";
import React from "react";

export type PolicyListItem = {
  text: string;
  description?: string | string[];
  additionalDescription?: string | string[];
  children?: PolicyListItem[];
};

export type PolicyBulletList = {
  children: PolicyListItem[];
};

export type PolicySection = {
  id: string;
  header: string;
  description?: string | string[];
  listItems?: PolicyListItem[];
  bulletList?: PolicyBulletList;
  additionalContent?: string; // For extra content like email or phone numbers
};

export type PrivacyPolicyProps = {
  data: PolicySection[];
};

const generateList = (items: PolicyListItem[]): JSX.Element => {
  return (
    <ol className="informacje-list-common !gap-10">
      {items.map((item, index) => (
        <li key={item.text || index} className="text-accent1 font-bold">
          {" "}
          {/* Use item.text or fall back to index */}
          <span
            className="font-bold text-accent1"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.text) }}
          />
          <div className="text-light font-normal">
            {item.description && (
              <>
                {typeof item.description === "string" ? (
                  <>
                    <br />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.description),
                      }}
                    />
                  </>
                ) : (
                  item.description.map((text, index) => (
                    <span
                      key={text || index}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(text),
                      }}
                    />
                  ))
                )}
              </>
            )}
            {item.children && item.children.length > 0 && (
              <ul className="informacje-list-bullet-common">
                {item.children.map((child, childIndex) => (
                  <li
                    key={child.text || childIndex}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(child.text),
                    }}
                  />
                ))}
              </ul>
            )}
            {item.additionalDescription && (
              <>
                {typeof item.additionalDescription === "string" ? (
                  <>
                    <br />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.additionalDescription),
                      }}
                    />
                  </>
                ) : (
                  item.additionalDescription.map((text, index) => (
                    <span
                      key={text || index}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(text),
                      }}
                    />
                  ))
                )}
              </>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};

const generateBulletList = ({ children }: PolicyBulletList) => {
  return (
    <ul className="informacje-list-bullet-common">
      {children.map((item, index) => (
        <li
          key={index}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(item.text),
          }}
        />
      ))}
    </ul>
  );
};

const generatePolicySection = ({
  id,
  header,
  description,
  listItems,
  additionalContent,
  bulletList,
}: PolicySection): JSX.Element => {
  return (
    <div id={id} className="informacje-container-common ">
      <span className="informacje-header-common text-left">{header}</span>
      {typeof description === "string" ? (
        <span
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        />
      ) : (
        description &&
        description.map((text, index) => (
          <span
            key={index}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
          />
        ))
      )}
      {additionalContent && (
        <span dangerouslySetInnerHTML={{ __html: additionalContent }} />
      )}
      {listItems && generateList(listItems)}
      {bulletList && generateBulletList(bulletList)}
    </div>
  );
};

const PrivacyPolicyGenerator: React.FC<PrivacyPolicyProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-10 limited-width pb-10">
      {data.map((PolicySection, index) => (
        <div key={index}>{generatePolicySection(PolicySection)}</div>
      ))}
    </div>
  );
};

export default PrivacyPolicyGenerator;
