import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { PostList, PostEdit } from "./posts";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} />
    <Resource name="users" list={UserList} show={ShowGuesser} />
  </Admin>
);
