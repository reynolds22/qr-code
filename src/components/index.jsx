import React, {useState} from "react";
import "./styles.css";
import QRCode from "react-qr-code";

export default function QrCoder(){

    const [theQRCode, setTheQRCode] = useState("");
    const [input, setInput] = useState("");

    function handleMakingGrCode(){
        setTheQRCode(input)
        setInput('')
    };

    return (
        <div className="QR-Code">
            <h1>QR Code Creater</h1>
            <div className="buttons">
                <input 
                    onChange={(e)=> setInput(e.target.value)} 
                    type="text" 
                    name="qr-code" 
                    value={input}
                    placeholder="Enter your value here" 
                />
                <button 
                    disabled={input && input.trim() !== "" ? false : true} 
                    onClick={handleMakingGrCode} 
                >Create!</button>
            </div>
            <div>
                <QRCode
                    id="gr-code-value"
                    value={theQRCode}
                    size={400}
                    background-color="white"
                />
            </div>
        </div>
    );
}; 