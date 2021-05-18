import React from "react";
import Editor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { Theme, createStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import "react-markdown-editor-lite/lib/index.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing(1),
    },
  })
);
const WriteEditor = () => {
  const classes = useStyles();

  const mdEditor = React.useRef(null);
  const [value, setValue] = React.useState<string>("");

  const handleEditorChange = ({ html, text }: any) => {
    const newValue = text.replace(/\d/g, "");

    console.log(newValue.replaceAll("\n", "__"));
    setValue(newValue);
  };
  //서버 전송후 replaceAll할지 안할지 결정

  useEffect(() => {
    // //비동기 통신으로 데이터
    // const aa = value.replaceAll("__", "\n");
    // setValue(aa);
  }, []);

  return (
    <>
      <Grid item xs={12} sm={9} md={9}>
        <Editor
          ref={mdEditor}
          value={value}
          style={{
            height: "500px",
          }}
          onChange={handleEditorChange}
          renderHTML={text => <ReactMarkdown children={text} />}
        />
      </Grid>
    </>
  );
};

export default WriteEditor;
