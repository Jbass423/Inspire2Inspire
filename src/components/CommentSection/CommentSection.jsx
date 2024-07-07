import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import ChatIcon from '@mui/icons-material/Chat';

const CommentSection = ({ imageId }) => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const editorRef = useRef(null);

  const handlePoem = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      dispatch({ type: 'ADD_POEM', payload: { poems: content , user_id: user.id, image_id: imageId } });
      editorRef.current.setContent(''); 
    }
  };

  return (
    <div className="container">
      
      <Editor
        apiKey='no5inhq130o7t6d3222uiph5xduhht7tkrqvcnq9ts761kut'
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue="Add your poem here"
        init={{
          height: 200,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap preview',
            'anchor searchreplace visualblocks code fullscreen',
            'insertdatetime media table help wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={handlePoem}><ChatIcon /> Submit Poem</button>
    </div>
  );
};

export default CommentSection;
