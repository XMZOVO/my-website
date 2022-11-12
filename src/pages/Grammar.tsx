import { Component, createEffect, createSignal, For, Show } from "solid-js";
import axios from "axios";

interface Grammar {
  id: number;
  title: string;
  page: string;
  path: string;
  level: null | string;
}

const Grammar: Component = () => {
  const [blueGrammar, setBlueGrammar] = createSignal<Grammar[]>([]);
  const [preGrammar, setPreGrammar] = createSignal<Grammar[]>([]);
  const [masterGrammar, setMasterGrammar] = createSignal<Grammar[]>([]);
  const [dicGrammar, setDicGrammar] = createSignal<Grammar[]>([]);
  const [title, setTitle] = createSignal("かかわらず");
  const [imgSrc, setImgSrc] = createSignal("");
  const [imgLoaded, setImgLoaded] = createSignal(true);
  const IP = "/api";
  const levelColor = {
    N1: "bg-red",
    N2: "bg-orange",
    N3: "bg-yellow",
    N4: "bg-green",
    N5: "bg-blue",
  };
  const [bookList, setBookList] = [
    { name: "蓝宝书", show: true },
    { name: "考前对策", show: true },
    { name: "完全掌握", show: false },
    { name: "文型辞典", show: false },
  ];
  createEffect(async () => {
    if (title()) {
      const res = await axios.get(`${IP}/grammar/${title()}`);
      if (res.data) {
        setBlueGrammar(res.data.blue);
      } else {
        setBlueGrammar([]);
      }
    } else {
      setBlueGrammar([]);
    }
  });
  const selectGrammar = (grammar: Grammar) => {
    if (!imgSrc().includes(grammar.path)) {
      setImgLoaded(false);
      setImgSrc(`${IP}/file/${grammar.path}`);
    }
  };
  return (
    <div grid="~ lg:cols-2" h-screen gap-2>
      <div h-full grid="~ rows-[min-content_min-content_1fr]" of-hidden mx-5>
        <h4>文法查阅3046 V1.1</h4>
        <div shadow border="~ gray op30 rounded" relative flex>
          <input
            flex-1
            type="text"
            border-none
            text-2xl
            bg-transparent
            outline-none
            p="x-6 y-4"
            value={title()}
            onInput={(e) => setTitle(e.currentTarget.value)}
          ></input>
        </div>
        <div border="l b r gray op30" mx-2 of-auto>
          <For each={blueGrammar()}>
            {(item) => (
              <div
                flex
                border="b gray op30"
                p="x-5 y-2"
                items-center
                gap-3
                hover="bg-gray bg-op10"
                onClick={() => selectGrammar(item)}
              >
                <Show when={item.level !== null}>
                  <div
                    class={levelColor[item.level as keyof typeof levelColor]}
                    p-1
                    rounded-sm
                    text-white
                  >
                    <span>{item.level}</span>
                  </div>
                </Show>
                <div>{item.title}</div>
                <div flex-1></div>
                <div></div>
              </div>
            )}
          </For>
        </div>
      </div>
      <div of-auto mx-5 relative>
        <Show when={!imgLoaded()}>
          <div
            absolute
            w-full
            h-full
            flex
            items-center
            justify-center
            text-white
            bg="black op60"
          >
            Loading...
          </div>
        </Show>
        <img
          object-contain
          w-full
          src={imgSrc()}
          alt=""
          onLoad={() => setImgLoaded(true)}
        />
      </div>
    </div>
  );
};

export default Grammar;
