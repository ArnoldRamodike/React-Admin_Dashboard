import { Box} from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
    return (
        <Box mb="20px">
            <Header title="GEOGRAPHY CHART" subtitle="Dispalying Diffent Locations"/>
            <Box height="75vh" border={`1px solid`}>
                <GeographyChart/>
            </Box>

        </Box>
    );
};

export default Geography;