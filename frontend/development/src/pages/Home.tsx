import { Box } from "@mui/system";
import Layout from "../layout/Layout";
import PostsList from "../components/postslist/PostsList";

function Home() {
    return (
        <Layout>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <PostsList />
            </Box>
        </Layout>
    );
}

export default Home;
