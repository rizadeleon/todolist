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
  const [todoInfo, setTodoInfo] = useState<Todolisst>({
    id: listArray.List.length,
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
                id: listArray.List.length,
                title: "",
                status: "unfinished",
              });
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
            fontWeight="bold"
            fontSize={30}
            textAlign="center"
          >
            Tasks
          </Typography>

          {listArray.List.map((data, index) => (
            <div key={index}>
              {data.status === "unfinished" && (
                <Typography>
                  {data.title}

                  <Checkbox
                    checked={data.status === "unfinished" ? false : true}
                    onChange={() => {
                      listArray.List[data.id].status = "finished";
                      setTodoInfo({
                        id: listArray.List.length,
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
            fontWeight="bold"
            fontSize={30}
            textAlign="center"
          >
            Finished Tasks
          </Typography>
          {listArray.List.map((data, index) => (
            <div key={index}>
              {data.status === "finished" && (
                <Typography style={{ textDecoration: "line-through" }}>
                  {data.title}
                  <Checkbox
                    checked={data.status === "finished" ? true : false}
                    onChange={() => {
                      listArray.List[data.id].status = "unfinished";
                      setTodoInfo({
                        id: listArray.List.length,
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
