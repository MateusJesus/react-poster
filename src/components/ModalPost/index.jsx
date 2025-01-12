import styled from "styled-components";

const Overlay = styled.div`
    background-color: rgba(0, 0 ,0 , 0.5);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index:1;
`

const Dialog = styled.dialog`
    position: absolute;
    z-index:1;
    top: 0;
    bottom: 0;
    background-color: transparent;
    width: 50%;
    border: none;
    form {
        display: flex;
        flex-direction: column;
        gap: 1em;
        background-color: #6233b9;
        padding: 1rem;
        margin: 2rem auto;
        border-radius: 6px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    }
`

const TextField = styled.div`
        width: 100%;
        label{
            display: block;
            margin-bottom: 0.5em;
            color: #eadbfb;
            font-weight: bold;
        }
        textarea, input{
            width:100%;
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
`

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
        button {  
            cursor: pointer;
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

        button[type='button'] {
            background-color: transparent;
        }

        button[type='button']:hover {
            color: #d1bee6;
        }
`


const ModalPost = ({ close, modal, Post }) => {

    const onCreatePost = (event) => {
        event.preventDefault();
        const data = {
            text: event.target.text.value,
            name: event.target.name.value
        }
        Post(data)
        close()
    }

    return (
        <>
            {modal &&
                <>
                    <Overlay />
                    <Dialog open>
                        <form onSubmit={onCreatePost} method="dialog">
                            <TextField>
                                <label htmlFor="text">Text</label>
                                <textarea type="text" name="text" id="text" />
                            </TextField>
                            <TextField>
                                <label htmlFor="name">Your name</label>
                                <input type="text" name="name" id="name" />
                            </TextField>
                            <Buttons>
                                <button type="button" onClick={close}>
                                    Cancel
                                </button>
                                <button type="submit">
                                    Submit
                                </button>
                            </Buttons>
                        </form>
                    </Dialog>
                </>
            }
        </>
    )
}

export default ModalPost;