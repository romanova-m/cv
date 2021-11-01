import React from "react";
import { useTranslation } from "react-i18next";
import "../locales/i18n";

export const TextComponent = (props) => {
  const { t } = useTranslation();

  return (
    <div className={props.class}>
        {t(props.text)}
    </div>
  );
};