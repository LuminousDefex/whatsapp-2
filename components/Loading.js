import styled from "styled-components";

function Loading() {
    return (
        <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
            <div>
                <img src="/whatsapp.png"
                    alt=""
                    style={{ marginBottom: 10 }}
                    height={200}
                />
                <LoadIcon />
            </div>
        </center >
    )
}

export default Loading;

const LoadIcon = styled.div`
    border: 6px solid #ccc;
    width: 60px;
    height: 60px;
    border-radius:50%;
    border-top-color: #3cbc28;
    border-left-color: #3cbc28;
    animation: spin 1s infinite ease-in-out;

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100%{transform: rotate(720deg)}
}
`;