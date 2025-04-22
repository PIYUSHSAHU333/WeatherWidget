import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
export default function({info, heading, icon , weather}){
  return (
    <div>
        <Card sx={{
            width: "128px",
            height: "95px",
            marginTop: "10px",
            backgroundColor: "unset",
            position: "relative",
            top: "15%",
            left: "25%",
            cursor: "pointer",
            transform: "translateX(-25%)",
            borderRadius: "18px",
            background: "linear-gradient(to bottom, rgba(255, 235, 59, 0.4), rgba(0, 176, 255, 0.4))"
        }}>

           <CardContent>
              <Typography sx={{display: "flex", alignItems: "center"}} >
                {icon}
                <span style={{opacity: 0.7, position: "relative", bottom:"10px", color: "white", fontSize: "12px"}}>{heading}</span>
              </Typography>

              <Typography variant="body2" sx={{fontSize: "23px", color: "white", display: "flex", flexDirection: "column"}}>
                <span style={{position: "relative", bottom: "4px"}}>{info}</span>

              </Typography>

           </CardContent>

        </Card>
    </div>
  )
}