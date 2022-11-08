import { Box} from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
    return (
        <Box mb="20px">
            <Header title="LINE CHART" subtitle="Traveling Data by type of Transportation."/>
            <Box height="75vh">
                <LineChart/>
            </Box>

        </Box>
    );
};

export default Line;