
export default function SideInfo({info, img}){
    return (
        <div style={{display: "flex",cursor: "pointer", alignItems: "center", justifyContent: "center", border: "solid 1px gray", borderRadius: "18px", padding: "0px 10px", paddingRight: "50px", background: "linear-gradient(135deg, rgba(0, 198, 255, 0.3), rgba(0, 114, 255, 0.5))", marginBottom: "10px" }}>
             <i style={{marginRight: "5px"}}> <img src={img} alt="wind" width="27" height="27" /></i> 
             <p style={{opacity: "0.7", fontSize: "12px"}}>{info}</p>
        </div>
    )
}