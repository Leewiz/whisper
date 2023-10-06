import React, { useEffect, useRef } from "react";

export default function Messages() {
  const bottomRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (bottomRef && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  return <ul></ul>;
}
