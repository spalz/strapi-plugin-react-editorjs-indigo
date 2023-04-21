import styled from "styled-components";
import { Box } from "@strapi/design-system/Box";

export const SBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SBoxLabel = styled.div`
  display: flex;
  align-items: center;
  span {
    color: rgb(102, 102, 135);
  }
`;

export const SToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9em;
  font-weight: 600;
  padding: 0.5em 0.5em;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  border-color: ${({ theme }) => theme.colors.buttonPrimary600};
  background-color: ${({ theme }) => theme.colors.buttonPrimary600};
  color: ${({ theme }) => theme.colors.buttonNeutral0};

  svg {
    transition: all 0.4s;
    transform: scaleY(-1);
    path {
      color: ${({ theme }) => theme.colors.neutral700};
    }
  }
  &:hover {
    color: ${({ theme }) => theme.colors.buttonPrimary800};
    svg {
      path {
        fill: ${({ theme }) => theme.colors.buttonPrimary800};
      }
    }
  }
  &.active {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    color: ${({ theme }) => theme.colors.neutral700};
    svg {
      transform: scaleY(1);
      path {
        fill: ${({ theme }) => theme.colors.buttonNeutral0};
      }
    }
  }
`;

const Wrapper = styled(Box)`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;800&display=swap");
  font-family: "Montserrat", sans-serif;

  .codex-editor__redactor {
    color: ${({ theme }) => theme.colors.neutral800};
  }
  .ce-toolbox__button {
    color: ${({ theme }) => theme.colors.neutral800};
    &:hover {
      color: ${({ theme }) => theme.colors.neutral150};
      background-color: ${({ theme }) => theme.colors.neutral900};
    }
  }
  .ce-toolbar__plus,
  .ce-toolbar__settings-btn {
    color: ${({ theme }) => theme.colors.neutral800};
    background-color: ${({ theme }) => theme.colors.neutral100};
    &:hover {
      color: ${({ theme }) => theme.colors.neutral150};
      background-color: ${({ theme }) => theme.colors.neutral900};
    }
  }
  .codex-editor {
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.colors.neutral0};
    margin-top: 0.5em;
  }
  .ce-block--selected {
    .ce-block__content {
      background: ${({ theme }) => theme.colors.neutral100};
    }
  }

  .cdx-input {
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.colors.neutral800};
    ::placeholder {
      color: ${({ theme }) => theme.colors.neutral500};
      opacity: 1;
    }
    &:focus-within,
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.primary600};
      box-shadow: ${({ theme }) => theme.colors.primary600} 0px 0px 0px 2px;
    }
  }

  .codex-editor {
    padding: 16px;
    font-size: 1rem;
    a {
      color: ${({ theme }) => theme.colors.secondary500};
      &:hover {
        color: ${({ theme }) => theme.colors.secondary700};
      }
    }
  }
  *:focus-visible {
    outline: none;
  }
  mark {
    background-color: #e9ddf6;
    padding: 0 0.2em;
    border-radius: 2px;
    font-weight: 600;
  }
  code {
    background-color: #d9f6f0;
    padding: 0 0.2em;
    border-radius: 2px;
    font-weight: 600;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }
  h3 {
    font-size: 1.17em;
    font-weight: bold;
  }
  h4 {
    font-size: 1em;
    font-weight: bold;
  }
  h5 {
    font-size: 0.83em;
    font-weight: bold;
  }
  h6 {
    font-size: 0.67em;
    font-weight: bold;
  }
  label {
    display: block;
    margin-bottom: 1rem;
  }
  &.bordered {
    .editorWrapper {
      border-color: red;
    }
  }
  > div + p {
    width: 100%;
    padding-top: 12px;
    font-size: 1.2rem;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: -9px;
  }
  div,
  pre,
  code {
    ::-webkit-scrollbar {
      height: 5px;
      width: 5px;
      cursor: default;
    }
  }
  .cdx-input.image-tool__caption {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  .Box {
    display: flex;
  }
  .ToggleShow {
    margin-left: auto;
    font-size: 14px;
  }

  // * attachement styles
  .cdx-attaches {
    &.cdx-attaches--with-file {
      background: ${({ theme }) => theme.colors.neutral0};
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
      .cdx-attaches__title {
        color: ${({ theme }) => theme.colors.neutral800};
      }
      .cdx-attaches__size {
        color: ${({ theme }) => theme.colors.neutral500};
      }
      .cdx-attaches__download-button {
        background: ${({ theme }) => theme.colors.neutral100};
        color: ${({ theme }) => theme.colors.neutral800};
      }
    }
  }
`;

export default Wrapper;
