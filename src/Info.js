import React, { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState("");
    const [nickName, setNickName] = useState("");

    // useEffect(() => {
    //     console.log("렌더링 완료");
    //     console.log({
    //         name,
    //         nickName
    //     });
    // });

    // useEffect(() => {
    //     console.log("마운트될 때만 실행됩니다.");
    // }, []);

    // 뒷정리하기
    useEffect(() => {
        console.log("effect");
        console.log(name);
        return () => {
            console.log("cleanup");
            console.log(name);
        };
    });

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickName = e => {
        setNickName(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickName} onChange={onChangeNickName} />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickName}
                </div>
            </div>
        </div>
    );
};

export default Info;
