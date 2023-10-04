import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; 


const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });


const TextEditor = ({content, setContent}) => {
    // const [content, setContent] = useState('');


  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }],
      [{ color: [] }],
      ['code-block'],
      ['clean'],
    ],
  };


  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
  ];


    return (
        <QuillEditor
        value={content}
        onChange={(newContent)=>setContent(newContent)}
        modules={quillModules}
        formats={quillFormats}
        className="w-full h-[100%] border border-indigo-500 rounded-md  bg-white
         overflow-hidden"
      />
   
    );
};

export default TextEditor;