import styled from "styled-components";
import Modal from "../../Modal";
import { Form, Link, redirect } from "react-router-dom";

const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: #6233b9;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const TextField = styled.div`
  width: 100%;
  label {
    display: block;
    margin-bottom: 0.5em;
    color: #eadbfb;
    font-weight: bold;
  }
  textarea,
  input {
    width: 100%;
    display: block;
    font: inherit;
    box-sizing: border-box;
    padding: 0.5rem;
    border-radius: 6px;
    border: none;
    background-color: #c4a9e4;
    color: #28262c;
  }
  textarea {
    resize: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  button,
  a {
    cursor: pointer;
    text-decoration: none;
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 4px;
    background-color: #34036c;
    color: #e5d5f7;
  }
  button:hover {
    background-color: #23014a;
  }

  a {
    background-color: transparent;
  }

  a:hover {
    color: #d1bee6;
  }
`;

const NewPost = () => {
  return (
    <Modal>
      <FormStyled>
        <Form method="post">
          <TextField>
            <label htmlFor="text">Text</label>
            <textarea required type="text" name="text" id="text" />
          </TextField>
          <TextField>
            <label htmlFor="name">Your name</label>
            <input required type="text" name="name" id="name" />
          </TextField>
          <Buttons>
            <Link to={"/"} type="button">
              Cancel
            </Link>
            <button type="submit">Submit</button>
          </Buttons>
        </Form>
      </FormStyled>
    </Modal>
  );
};

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  console.log(JSON.stringify(postData));
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}
