import axios from "axios";
import { BookInfo } from "./components/book-info";
import { CurrentUserLoader } from "./components/current-user-loader";
import { DataSource } from "./components/data-source";
import { DataSourceWithRender } from "./components/data-source-with-render";
import { ResourceLoader } from "./components/resource-loader";
import { UserInfo } from "./components/user-info";
import { UserLoader } from "./components/user-loader";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
}

const getDataFromLocalStorage = key =>  () => {
  return localStorage.getItem(key);
}

const Message = ({msg}) => <h1>{msg}</h1>

function App() {
  return (
    <>
      <DataSource 
        getData={() => getDataFromServer("/users/3")}
        resourceName={"user"}  
      >
        <UserInfo />
      </DataSource>

      <br />

      <DataSourceWithRender
        getData={() => getDataFromServer("/users/1")}
        render={(resource) => <UserInfo user={resource} />}
      />

      <br />

      <DataSource 
        getData={() => getDataFromLocalStorage("test")} 
        resourceName={"msg"}
      >
        <Message />
      </DataSource>
    </>
  );
};

export default App;
