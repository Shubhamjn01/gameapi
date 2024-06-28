import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayoutV2,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { authProvider } from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";

import { ForgotPassword } from "./pages/forgotPassword";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { UserCreate, UserEdit, UserList, UserShow } from "./pages/users";
import {
  PlatformCreate,
  PlatformEdit,
  PlatformList,
  PlatformShow,
} from "./pages/platform";
import {
  PassportCreate,
  PassportEdit,
  PassportList,
  PassportShow,
} from "./pages/passport";
import { MapCreate, MapEdit, MapList, MapShow } from "./pages/map";
import { TagCreate, TagEdit, TagList, TagShow } from "./pages/tag";
import { ClusterCreate, ClusterEdit, ClusterList, ClusterShow, } from "./pages/cluster";
import { ActiveMapCreate, ActiveMapEdit, ActiveMapList, ActiveMapShow } from "./pages/activemap";
import { UserPersistanceDataCreate, UserPersistanceDataEdit, UserPersistanceDataList, UserPersistanceDataShow } from "./pages/userpersistancedata";
import { LeaderboardCreate, LeaderboardEdit, LeaderboardList, LeaderboardShow } from "./pages/leaderboard";
import { TokenCreate, TokenEdit, TokenList, TokenShow } from "./pages/token";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider("http://3.27.185.247:5003")}
                notificationProvider={notificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={[
                  // {
                  //   name: "blog_posts",
                  //   list: "/blog-posts",
                  //   create: "/blog-posts/create",
                  //   edit: "/blog-posts/edit/:id",
                  //   show: "/blog-posts/show/:id",
                  //   meta: {
                  //     canDelete: true,
                  //   },
                  // },
                  // {
                  //   name: "categories",
                  //   list: "/categories",
                  //   create: "/categories/create",
                  //   edit: "/categories/edit/:id",
                  //   show: "/categories/show/:id",
                  //   meta: {
                  //     canDelete: true,
                  //   },
                  // },
                  {
                    name: "users",
                    list: "/users",
                    create: "/users/create",
                    edit: "/users/edit/:id",
                    show: "/users/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "passport",
                    list: "/passport",
                    create: "/passport/create",
                    edit: "/passport/edit/:id",
                    show: "/passport/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "platform",
                    list: "/platform",
                    create: "/platform/create",
                    edit: "/platform/edit/:id",
                    show: "/platform/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "map",
                    list: "/map",
                    create: "/map/create",
                    edit: "/map/edit/:id",
                    show: "/map/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "tag",
                    list: "/tag",
                    create: "/tag/create",
                    edit: "/tag/edit/:id",
                    show: "/tag/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "cluster",
                    list: "/cluster",
                    create: "/cluster/create",
                    edit: "/cluster/edit/:id",
                    show: "/cluster/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "activemap",
                    list: "/activemap",
                    create: "/activemap/create",
                    edit: "/activemap/edit/:id",
                    show: "/activemap/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "userpersistancedata",
                    list: "/userpersistancedata",
                    create: "/userpersistancedata/create",
                    edit: "/userpersistancedata/edit/:id",
                    show: "/userpersistancedata/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "leaderboard",
                    list: "/leaderboard",
                    create: "/leaderboard/create",
                    edit: "/leaderboard/edit/:id",
                    show: "/leaderboard/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "token",
                    list: "/token",
                    create: "/token/create",
                    edit: "/token/edit/:id",
                    show: "/token/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "JFIMj9-Ux0kLc-kBsL7C",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <ThemedLayoutV2
                          Title={() => (
                            <div
                              style={{
                                width: "100%",
                              }}
                            >
                              <p
                                style={{
                                  textAlign: "center",
                                  fontSize: "20px",
                                  fontFamily: "fantasy",
                                }}
                              >
                                Admin Panel
                              </p>
                            </div>
                          )}
                          Header={Header}
                        >
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="users" />}
                    />
                    {/* <Route path="/blog-posts">
                      <Route index element={<BlogPostList />} />
                      <Route path="create" element={<BlogPostCreate />} />
                      <Route path="edit/:id" element={<BlogPostEdit />} />
                      <Route path="show/:id" element={<BlogPostShow />} />
                    </Route>
                    <Route path="/categories">
                      <Route index element={<CategoryList />} />
                      <Route path="create" element={<CategoryCreate />} />
                      <Route path="edit/:id" element={<CategoryEdit />} />
                      <Route path="show/:id" element={<CategoryShow />} />
                    </Route> */}
                    <Route path="/users">
                      <Route index element={<UserList />} />
                      <Route path="create" element={<UserCreate />} />
                      <Route path="edit/:id" element={<UserEdit />} />
                      <Route path="show/:id" element={<UserShow />} />
                    </Route>
                    <Route path="/passport">
                      <Route index element={<PassportList />} />
                      <Route path="create" element={<PassportCreate />} />
                      <Route path="edit/:id" element={<PassportEdit />} />
                      <Route path="show/:id" element={<PassportShow />} />
                    </Route>
                    <Route path="/platform">
                      <Route index element={<PlatformList />} />
                      <Route path="create" element={<PlatformCreate />} />
                      <Route path="edit/:id" element={<PlatformEdit />} />
                      <Route path="show/:id" element={<PlatformShow />} />
                    </Route>
                    <Route path="/map">
                      <Route index element={<MapList />} />
                      <Route path="create" element={<MapCreate />} />
                      <Route path="edit/:id" element={<MapEdit />} />
                      <Route path="show/:id" element={<MapShow />} />
                    </Route>
                    <Route path="/tag">
                      <Route index element={<TagList />} />
                      <Route path="create" element={<TagCreate />} />
                      <Route path="edit/:id" element={<TagEdit />} />
                      <Route path="show/:id" element={<TagShow />} />
                    </Route>
                    <Route path="/cluster">
                      <Route index element={<ClusterList />} />
                      <Route path="create" element={<ClusterCreate />} />
                      <Route path="edit/:id" element={<ClusterEdit />} />
                      <Route path="show/:id" element={<ClusterShow />} />
                    </Route>
                    <Route path="/activemap">
                      <Route index element={<ActiveMapList />} />
                      <Route path="create" element={<ActiveMapCreate />} />
                      <Route path="edit/:id" element={<ActiveMapEdit />} />
                      <Route path="show/:id" element={<ActiveMapShow />} />
                    </Route>
                    <Route path="/userpersistancedata">
                      <Route index element={<UserPersistanceDataList />} />
                      <Route path="create" element={<UserPersistanceDataCreate />} />
                      <Route path="edit/:id" element={<UserPersistanceDataEdit />} />
                      <Route path="show/:id" element={<UserPersistanceDataShow />} />
                    </Route>
                    <Route path="/leaderboard">
                      <Route index element={<LeaderboardList />} />
                      <Route path="create" element={<LeaderboardCreate />} />
                      <Route path="edit/:id" element={<LeaderboardEdit />} />
                      <Route path="show/:id" element={<LeaderboardShow/>} />
                    </Route>
                    <Route path="/token">
                      <Route index element={<TokenList />} />
                      <Route path="create" element={<TokenCreate />} />
                      <Route path="edit/:id" element={<TokenEdit />} />
                      <Route path="show/:id" element={<TokenShow/>} />
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-outer"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPassword />}
                    />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
