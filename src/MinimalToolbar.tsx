import {
  DiffSourceToggleWrapper,
  ConditionalContents,
  ChangeCodeMirrorLanguage,
  UndoRedo,
  Separator,
  BoldItalicUnderlineToggles,
  CodeToggle,
  StrikeThroughSupSubToggles,
  ListsToggle,
  BlockTypeSelect,
  CreateLink,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  InsertCodeBlock,
} from '@mdxeditor/editor';
import React from 'react';

export const MinimalToolbar: React.FC = () => {
  return (
    <DiffSourceToggleWrapper>
      <ConditionalContents
        options={[
          { when: (editor) => editor?.editorType === 'codeblock', contents: () => <ChangeCodeMirrorLanguage /> },
          {
            fallback: () => (
              <>
                <UndoRedo />
                <Separator />
                <BoldItalicUnderlineToggles />
                <CodeToggle />
                <Separator />
                <StrikeThroughSupSubToggles />
                <Separator />
                <ListsToggle />
                <Separator />

                <BlockTypeSelect />

                <Separator />

                <CreateLink />
                <InsertImage />

                <Separator />

                <InsertTable />
                <InsertThematicBreak />

                <Separator />
                <InsertCodeBlock />
              </>
            ),
          },
        ]}
      />
    </DiffSourceToggleWrapper>
  );
};
