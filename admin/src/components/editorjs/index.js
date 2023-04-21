import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import EditorJs from "react-editor-js";
import requiredTools from "./requiredTools";
import customTools from "../../config/customTools";

import MediaLibAdapter from "../medialib/adapter";
import MediaLibComponent from "../medialib/component";
import { changeFunc, getToggleFunc } from "../medialib/utils";

const Editor = ({ onChange, name, value, key }) => {
  const [editorInstance, setEditorInstance] = useState();
  const [mediaLibBlockIndex, setMediaLibBlockIndex] = useState(-1);
  const [isMediaLibOpen, setIsMediaLibOpen] = useState(false);

  const mediaLibToggleFunc = useCallback(
    getToggleFunc({
      openStateSetter: setIsMediaLibOpen,
      indexStateSetter: setMediaLibBlockIndex,
    }),
    []
  );

  const handleMediaLibChange = useCallback(
    (data) => {
      changeFunc({
        indexStateSetter: setMediaLibBlockIndex,
        data,
        index: mediaLibBlockIndex,
        editor: editorInstance,
      });
      mediaLibToggleFunc();
    },
    [mediaLibBlockIndex, editorInstance]
  );

  const customImageTool = {
    mediaLib: {
      class: MediaLibAdapter,
      config: {
        mediaLibToggleFunc,
      },
    },
  };

  return (
    <>
      <div>
        <EditorJs
          key={key}
          enableReInitialize={true}
          onReady={(api) => {
            if (value && JSON.parse(value).blocks.length) {
              api.blocks.render(JSON.parse(value));
            }
            document.querySelector('[data-tool="image"]').remove();
            document.querySelector('[data-tool="Attaches"]').remove();
          }}
          onChange={(api, newData) => {
            if (!newData.blocks.length) {
              newData = null;
              onChange({ target: { name, value: newData } });
            } else {
              onChange({ target: { name, value: JSON.stringify(newData) } });
            }
          }}
          tools={{ ...requiredTools, ...customTools, ...customImageTool }}
          instanceRef={(instance) => setEditorInstance(instance)}
        />
      </div>
      <MediaLibComponent
        isOpen={isMediaLibOpen}
        onChange={handleMediaLibChange}
        onToggle={mediaLibToggleFunc}
      />
    </>
  );
};

Editor.propTypes = {
  key: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;
