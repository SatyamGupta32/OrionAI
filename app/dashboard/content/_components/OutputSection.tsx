import {useRef} from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

function OutputSection() {
  const editorRef:any = useRef(null);
  return (
    <div className='w-full p-5 shadow-lg border rounded-sm bg-white'>

    <div className='flex items-center justify-between py-4'>
      <h2 className='font-normal text-lg'>Your Result</h2>
      <Button><Copy className='mr-2'/>Copy</Button>
    </div>

      <Editor
        ref = {editorRef}
        initialValue="Your result show here !"
        height='600px'
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default OutputSection
