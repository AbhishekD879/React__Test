
const Button=({additionalStyles,children,onClick})=>{
    const style={
        width:"10rem",
        minWidth:"50%",
        height:"2rem",
        backgroundColor:"#33adff",
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        color:"white",
        borderRadius: "5px",
        userSelect:"none",
        marginTop: "1.5rem",
        cursor:"pointer",
        // boxShadow:"0 0 10px 10px #33adff",
        ...additionalStyles
    }
  return (
    <div onClick={onClick} className='btn_primary' style={style}>
    {children}
    </div>
  )
}



const App=()=>{
    const [isDark,setIsDark]=React.useState(false)
    const style={
        App:{
            display:"grid",
            placeItems:"center",
            width:"100%",
            height:"100vh",
            backgroundColor:"rgb(240, 235, 248)",
            overflow: 'hidden',
            padding: "20px",
            fontWeight: 'bold',
        },
        innerdiv:{
            backgroundColor:isDark?"black":"white",
            color:isDark?"white":"black",
            wordWrap: "break-word",
            maxWidth: "500px",
            border: "1px solid #dadce0",
            borderRadius: "8px",
            marginBottom: "12px",
            padding: "24px",
            pageBreakInside: "avoid",
            minWidth:"350px",
            minHeight: "200px",
        }
    }
    const clickhandler=()=>{
        if(!isDark){
            setIsDark(true)
        }else{
            setIsDark(false)
        }
    }
    return(
        <div style={style.App}>
            {isDark?"Dark Mode":"Light Mode"}
            <textarea style={style.innerdiv}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget pretium erat, id suscipit velit. Fusce eget justo ut est auctor semper vitae vitae sem. Curabitur quis augue id nisl luctus sagittis. Praesent at velit ligula. Aliquam ut ex ut 
            </textarea>
            <div>
                <Button onClick={clickhandler}>
                {isDark?"Dark Mode":"Light Mode"}
                </Button>
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<App />);