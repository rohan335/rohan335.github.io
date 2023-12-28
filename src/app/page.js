import Image from "next/image";
import TypingAnimation from "./components/typingAnimation";
import Card from "./components/card";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row justify-between w-11/12  mt-10">

      <div className="flex flex-col flex-1 justify-between pb-10">
        <div className="flex flex-col text-3xl leading-relaxed tracking-wider">
          <p>Hey! I'm Rohan Desai,</p>
          <p>a
            <TypingAnimation></TypingAnimation>
          </p>
          <p>based in LA.</p>
        </div>

        <div className="-mt-96" style={{width: '50%', height: 225}}>
          <p className='font-medium text-lg'>WHAT'S NEW?</p>
          <Card></Card>
        </div>
      </div>


      <div style={{height: 525}}>
        <Image src="/bwheadshot.png" alt="Rohan Desai" height={0} width={0} sizes="100vw" style={{height: '100%', width: 'auto'}}/>
      </div>

      </div>
    </div>
  )
}