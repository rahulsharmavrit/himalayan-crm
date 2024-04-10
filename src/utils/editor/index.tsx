import {useState} from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; 

const Editor = ({initialValue,onChange,height,placeholder}:any) => {

    const [content, setContent] = useState<any>(initialValue);
    const handleChange = (value:any) => {
        if (value === '<p><br></p>') {
          setContent('');
        } else {
          setContent(value);
        }
        if (onChange) {
          onChange(value);
        }
      };

    const options = [
        ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
        ['bold', 'underline', 'italic', 'strike', 'removeFormat'],
        ['fontColor', 'hiliteColor', 'outdent', 'indent'],
        ['align', 'list', 'table', 'link', 'image'],
        ['showBlocks', 'codeView'],
      ];

  return (<>
<div style={{ borderRadius: '4px', border: '1px solid transparent'}}>

      <SunEditor
        setOptions={{
          buttonList: options,
        }}
        placeholder={placeholder}
        height={height}
        onChange={handleChange}
        setContents={initialValue || content}
      />
    </div>
  
  
  </>)
};

export default Editor