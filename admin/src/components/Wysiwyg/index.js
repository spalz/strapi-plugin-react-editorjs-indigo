import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import Editor from "../editorjs";
import cn from "classnames";
import Wrapper, { SBox, SBoxLabel, SToggle } from "./wrapper";
import { useIntl } from "react-intl";
import { Box } from "@strapi/design-system/Box";
import { Typography } from "@strapi/design-system/Typography";
import {
  useCMEditViewDataManager,
  useQueryParams,
} from "@strapi/helper-plugin";
import CarretDown from "@strapi/icons/CarretDown";
import { Icon } from "@strapi/design-system/Icon";

const Wysiwyg = ({
  name,
  className,
  error,
  description,
  intlLabel,
  required,
  onChange,
  style,
  value,
  disabled,
}) => {
  const [spoiler, setSpoiler] = useState(true);

  const { formatMessage } = useIntl();
  const { initialData } = useCMEditViewDataManager();
  const query = useQueryParams();

  const locale =
    query && query[0].query && query[0].query.plugins
      ? query[0].query.plugins.i18n.locale
      : "none";

  const currectLocale = locale === "ru" || locale === "en" ? locale : "none";
  const show =
    currectLocale !== "none" ? name.includes(`_${currectLocale}`) : "none";
  const myRef = useRef();

  useEffect(() => {
    if (myRef.current && show === "none") {
      setSpoiler(true);
    }
    if (myRef.current && !show) {
      setSpoiler(false);
    }
  }, [show]);

  const toggleSpoiler = () => {
    setSpoiler(!spoiler);
  };

  return (
    <Wrapper
      size={1}
      className={`${cn(!isEmpty(className) && className)}`}
      style={style}
      ref={myRef}
    >
      <Box className="Box">
        <SBox>
          <SBoxLabel>
            <Typography variant="omega" fontWeight="bold">
              {formatMessage(intlLabel)}
            </Typography>
            {required && (
              <Typography
                variant="omega"
                fontWeight="bold"
                textColor="danger600"
              >
                *
              </Typography>
            )}
          </SBoxLabel>
          <SToggle
            className={spoiler ? "active" : ""}
            onClick={() => toggleSpoiler()}
          >
            {spoiler ? "Скрыть" : "Показать"}
            <Icon as={CarretDown} fontSize={2} />
          </SToggle>
        </SBox>
      </Box>
      {spoiler ? (
        <Editor
          key={name}
          onChange={onChange}
          value={value}
          name={name}
          disabled={disabled}
        />
      ) : null}
      {error && (
        <Typography variant="pi" textColor="danger600">
          {formatMessage({ id: error, defaultMessage: error })}
        </Typography>
      )}
      {description && (
        <Typography variant="pi">{formatMessage(description)}</Typography>
      )}
    </Wrapper>
  );
};

Wysiwyg.defaultProps = {
  className: "",
  style: {},
  tabIndex: "0",
  value: null,
  description: "",
  disabled: false,
  error: undefined,
  intlLabel: "",
  required: false,
  value: "",
};

Wysiwyg.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  tabIndex: PropTypes.string,
  description: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }),
  disabled: PropTypes.bool,
  error: PropTypes.string,
  intlLabel: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }),
  required: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Wysiwyg;
