import Button from "./Button"

export default function MeetBreeze (){
    return (
        <section className="bg-[#b7ecec] px-5 py-10">
                <h2 className="text-2xl mt-4 text-center font-medium text-black mb-5">Meet Breeze — The complete AI solution for your business.</h2>
                
                <p className=" text-lg text-center font-light">Use Breeze Copilot to assist with tasks, Breeze Agents to automate your work, Breeze Intelligence to enrich your data, and a growing list of Breeze features to help you get work done faster.</p>
                <div className="w-full mt-5 flex justify-center">
                <Button className=" px-8 m-auto bg-white font-bold text-[#fc7756] py-4" value="Learn more" />
                </div>
            
        </section>
    )
}