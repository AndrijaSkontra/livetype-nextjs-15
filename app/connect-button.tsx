"use client";
type Props = {};

export default function ConnectButton({}: Props) {
  return (
    <div>
      <button
        onClick={() => {
          console.log("Connecting to server");
        }}
      >
        Connect
      </button>
    </div>
  );
}
