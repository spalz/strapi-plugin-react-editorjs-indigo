import PluginId from "../pluginId";

import Embed from "@editorjs/embed";
// import Table from '@editorjs/table'
import List from "@editorjs/list";
// import Warning from '@editorjs/warning'
// import Code from '@editorjs/code'
import LinkTool from "@editorjs/link";
// import Raw from '@editorjs/raw'
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from '@editorjs/marker'
// import CheckList from '@editorjs/checklist'
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import AttachesTool from "@editorjs/attaches";

const customTools = {
  Header: {
    class: Header,
    inlineToolbar: true,
    config: {
      inlineToolbar: ["bold", "italic", "hyperlink", "marker", "inlineCode"],
      levels: [2, 3, 4],
      defaultLevel: 2,
    },
  },
  List: {
    class: List,
    inlineToolbar: true,
  },
  Embed: Embed,
  // table: {
  //   class: Table,
  //   inlineToolbar: true,
  // },
  // warning: {
  //   class: Warning,
  //   inlineToolbar: true,
  //   config: {
  //     titlePlaceholder: 'Title',
  //     messagePlaceholder: 'Message',
  //   },
  // },
  // code: Code,
  LinkTool: {
    class: LinkTool,
    config: {
      endpoint: `/api/${PluginId}/link`,
    },
  },
  // raw: {
  //   class: Raw,
  //   inlineToolbar: true,
  // },
  Quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: "Quote",
      captionPlaceholder: "Quote`s author",
    },
  },
  marker: {
    class: Marker,
    inlineToolbar: true,
  },
  // checklist: {
  //   class: CheckList,
  //   inlineToolbar: true,
  // },
  Delimiter: Delimiter,
  InlineCode: InlineCode,
  Attaches: {
    class: AttachesTool,
    config: {
      endpoint: `/api/${PluginId}/link`,
    },
  },
};

export default customTools;
