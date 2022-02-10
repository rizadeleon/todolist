import { Button, Container, TextField, Typography, Grid } from "@mui/material";
import { ChangeEvent, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
export interface Todolisst {
  id: number;
  title: string;
  status: string;
}
const listArray = { List: [{ id: 0, title: "Task 1", status: "unfinished" }] };

export default function Home() {
  const idCount = listArray.List.length;
  const [todoInfo, setTodoInfo] = useState<Todolisst>({
    id: idCount,
    title: "",
    status: "unfinished",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container maxWidth="sm" disableGutters>
      <Grid container pt={2}>
        <Grid
          item
          xs={12}
          md={10}
          border={2}
          bgcolor="#efebe9"
          borderColor="#263238"
          p={3}
          borderRadius={2}
        >
          <Typography
            fontFamily="sans-serif"
            mt={3}
            fontWeight="bold"
            fontSize={30}
            textAlign="center"
          >
            Todolist
          </Typography>

          <TextField
            fullWidth
            required
            id="outlined-basic"
            placeholder="Enter Task"
            variant="outlined"
            color="info"
            size="small"
            name="title"
            value={todoInfo.title}
            onChange={handleChange}
            sx={{ mt: 2, backgroundColor: "white" }}
          />

          <Button
            sx={{ mt: 2 }}
            variant="contained"
            fullWidth
            onClick={() => {
              listArray.List.push(todoInfo);
              setTodoInfo({
                id: idCount,
                title: "",
                status: "unfinished",
              });
              console.log(listArray.List);
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      <Grid container pt={2}>
        <Grid
          item
          xs={12}
          md={10}
          border={2}
          bgcolor="#efebe9"
          borderColor="#263238"
          p={3}
          borderRadius={2}
        >
          <Typography
            fontFamily="sans-serif"
            mt={3}
            fontWeight="bold"
            fontSize={30}
            textAlign="center"
          >
            Tasks
          </Typography>

          {listArray.List.map((data, index) => (
            <div key={index}>
              {data.status === "unfinished" && (
                <Typography
                  color={data.status === "unfinished" ? "success" : "error"}
                >
                  {data.title}

                  <Checkbox
                    checked={data.status === "unfinished" ? false : undefined}
                    onChange={() => {
                      listArray.List[data.id].status = "finished";
                      setTodoInfo({
                        id: idCount,
                        title: "",
                        status: "unfinished",
                      });
                      console.log(data);
                    }}
                  />
                </Typography>
              )}
            </div>
          ))}
        </Grid>
      </Grid>
      <Grid container pt={2}>
        <Grid
          item
          xs={12}
          md={10}
          border={2}
          bgcolor="#efebe9"
          borderColor="#263238"
          p={3}
          borderRadius={2}
        >
          <Typography
            fontFamily="sans-serif"
            mt={3}
            fontWeight="bold"
            fontSize={30}
            textAlign="center"
          >
            Finished Tasks
          </Typography>
          {listArray.List.map((data, index) => (
            <div key={index}>
              {data.status === "finished" && (
                <Typography
                  color={data.status === "finished" ? "error" : "success"}
                >
                  {data.title}
                  <Checkbox
                    checked={data.status === "finished" ? true : false}
                    onChange={() => {
                      listArray.List[data.id].status = "unfinished";
                      setTodoInfo({
                        id: idCount,
                        title: "",
                        status: "unfinished",
                      });
                    }}
                  />
                </Typography>
              )}
            </div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
