import { Box, Button, IconButton, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import { mockDataTransactions} from "../../data/mockData";
import  Header  from "../../components/Header";
import  DownloadOutlinedIcon  from "@mui/icons-material/DownloadOutlined";
import  EmailIcon  from "@mui/icons-material/Email";
import  PointofSaleIcon from "@mui/icons-material/PointOfSale";
import  PersonAddIcon  from "@mui/icons-material/PersonAdd";
import  TrafficIcon  from "@mui/icons-material/Traffic";
import LineChart from "../../components/BarChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard   = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return ( <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard"/>
        </Box>

        <Box>
           <Button sx={{
            backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight:"Bold", padding: "10px 20px",
            }}>
                <DownloadOutlinedIcon sx={{mr: "10px"}}/> Download Reports
            </Button> 
        </Box>
        {/* Grid and Chart */}
        <Box display= "grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
            <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alighnItems="centre" justifyContent="centre">
                <StatBox title="12,361" subtitle="Email Sent" progress="0.75" increase= "+14%"
                icon={<EmailIcon sx={{color: colors.greenAccent[600], fontSize: "26px"}}/>}  />
            </Box>
        </Box>

    </Box>
    );
};

export default Dashboard;