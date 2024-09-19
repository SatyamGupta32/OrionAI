'use client';
import { useRef, useEffect, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy, CopyCheck } from 'lucide-react';

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  const editorRef: any = useRef(null);
  const [isCopied, setIsCopied] = useState(false); // State to track copy status

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  // Handle copy button click
  const handleCopyClick = () => {
    navigator.clipboard.writeText(aiOutput).then(() => {
      setIsCopied(true); // Show CopyCheck icon
      setTimeout(() => {
        setIsCopied(false); // Revert back to Copy icon after 1 second
      }, 1000); // 1 second delay
    });
  };

  return (
    <div className='w-full p-5 shadow-lg border rounded-sm bg-white'>
      <div className='flex items-center justify-between py-4'>
        <h2 className='font-normal text-lg'>Your Result</h2>
        <Button onClick={handleCopyClick}>
          {isCopied ? <CopyCheck className='mr-2' /> : <Copy className='mr-2' />} {/* Switch between icons */}
          {isCopied ? 'Copied!' : 'Copy'}
        </Button>
      </div>

      <Editor
        ref={editorRef}
        initialValue="Your result shows here!"
        height='600px'
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>
  );
}

export default OutputSection;
