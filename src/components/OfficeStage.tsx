import { ChatHistory } from "./ChatHistory";
import { RoomScene } from "./RoomScene";
import { SideMenu } from "./SideMenu";

type OfficeStageProps = {
  messages: string[];
};

export function OfficeStage({ messages }: OfficeStageProps) {
  return (
    <main className="content">
      <section className="roomBox">
        <SideMenu />
        <div className="emptyStage">
          <RoomScene />
        </div>
        <ChatHistory messages={messages} />
      </section>
    </main>
  );
}
