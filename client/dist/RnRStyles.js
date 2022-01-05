import styled from 'styled-components';

export const ReviewListContainer = styled.div`
  font-family: Helvetica, Sans-Serif;
  font-size: 15px;
  margin-top: 5%;
  width: 95%;
  height: 50%;
`;

export const ResponseBorder = styled.div`
  padding: 0.25em 0.25em 0.25em 1em;
  background: #ebebeb;
  border-radius: 3px;
`;

export const HelperStyles = styled.div`
  font-size: 12px;
  margin-top: 25px;
`;

export const ReviewButtons = styled.button`
  font-family: Helvetica;
  font-weight: bold;
  background-color: white;
  color: black;
  font-size: 15x;
  padding: 20px 15px;
  border-radius: 0px;
  border: 1px solid black;
  margin: 10px 0px;
  cursor: pointer;
`;

export const WriteReviewStyles = styled.div`

h1 {
  border-bottom: 1px solid white;
  color: #3d3d3d;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  padding: 10px;
  text-align: center;
}

form {
  background: white;
  border: 1px solid #dedede;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 500px;
  padding: 30px 50px;
}

input {
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
}

textarea {
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
}

label {
  color: #3d3d3d;
  display: block;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
}

.error {
  color: red;
  font-family: sans-serif;
  font-size: 12px;
  height: 30px;
}

.submitButton {
  background-color: #6976d9;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  margin: 20px 0px;
`;

