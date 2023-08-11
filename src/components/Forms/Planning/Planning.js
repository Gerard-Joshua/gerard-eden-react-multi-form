import React, { useContext, useEffect, useState } from "react";
import { HiUser, HiUserGroup } from "react-icons/hi2";
import { FormContext } from "../../../App";

function Planning() {
    const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext);
    const [user, setUser] = useState(true);
    const [users, setUsers] = useState(false);
    
    useEffect(() => {
        const isIndividual = document.getElementById("individual");
        const isIndividualIcon = document.getElementById("individual_icon");
        const isTeam = document.getElementById("team");
        const isTeamIcon = document.getElementById("team_icon");
        if(users) {
            isTeam.style.border = "1px solid #6600ff";
            isTeamIcon.style.color = "#6600ff";
            isIndividual.style.border = "";
            isIndividualIcon.style.color = "";
        }else{
            isIndividual.style.border = "1px solid #6600ff";
            isIndividualIcon.style.color = "#6600ff";
            isTeam.style.border = "";
            isTeamIcon.style.color = "";
        }
    },[user,users]);

    const individual = () => {
        setUser(true);
        setUsers(false);
    }
    const team = () => {
        setUser(false);
        setUsers(true);
    }
    const setPlanning = () => {
        const data = { ...formData, planning: user ? "Myself" : "Team" };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center py-5">
                <div className="text-3xl font-medium self-center mb-2">How are you planning to use Eden?</div>
                <div className="text-1xl text-gray-400 font-medium text-gray-500 self-center mb-2">We'll streamline your setup experience accordingly.</div>
                <div className="w-1/2 flex flex-row justify-center items-center py-5">
                    <div className="rounded-md flex flex-col border-2 border-gray-200 mx-3 p-5" id="individual" onClick={() => individual()}>
                        <div className="items-start my-2" id="individual_icon"><HiUser size={"35"}/></div>
                        <div className="items-start font-medium font-bold my-2">For Myself</div>
                        <div className="items-start font-medium text-1xl text-gray-500">Write better. Think more clearly. Stay organized.</div>
                    </div>
                    <div className="rounded-md flex flex-col border-2 border-gray-200 mx-3 p-5" id="team" onClick={() => team()}>
                        <div className="items-start my-2" id="team_icon"><HiUserGroup size={"35"}/></div>
                        <div className="items-start font-medium font-bold my-2">With my team</div>
                        <div className="items-start font-medium text-1xl text-gray-500">Wikis, docs, tasks & projects, all in one place.</div>
                    </div>
                </div>
                <button
                    className="w-1/2 rounded-md bg-indigo-500 font-small text-white my-4 p-3"
                    onClick={() => setPlanning()}
                >
                    Create Workspace
                </button>
        </div>
        </>
    );
}

export default Planning;
