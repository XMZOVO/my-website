import {
  Component,
  createEffect,
  createSignal,
  For,
  Match,
  Show,
  Switch,
} from "solid-js";
import { createStore } from "solid-js/store";
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
  const [title, setTitle] = createSignal("");
  const [imgSrc, setImgSrc] = createSignal("");
  const [imgLoaded, setImgLoaded] = createSignal(true);
  let [selectItemPath, setSelectItemPath] = createSignal("");
  const IP = "/api";
  const levelColor = {
    N1: "bg-red",
    N2: "bg-orange",
    N3: "bg-yellow",
    N4: "bg-green",
    N5: "bg-blue",
  };
  const bookColor = {
    blue: "bg-blue",
    pre: "bg-yellow",
    master: "bg-green",
    dic: "bg-purple",
  };
  const [bookList, setBookList] = createStore([
    { name: "蓝宝书", show: true },
    { name: "考前对策", show: true },
    { name: "完全掌握", show: false },
    { name: "文型辞典", show: false },
  ]);
  createEffect(async () => {
    if (title()) {
      const res = await axios.get(`${IP}/grammar/${title()}`);
      if (res.data) {
        setBlueGrammar(res.data.blue);
        setPreGrammar(res.data.pre);
        setMasterGrammar(res.data.master);
        setDicGrammar(res.data.dic);
      } else {
        setBlueGrammar([]);
        setPreGrammar([]);
        setMasterGrammar([]);
        setDicGrammar([]);
      }
    } else {
      setBlueGrammar([]);
      setPreGrammar([]);
      setMasterGrammar([]);
      setDicGrammar([]);
    }
  });
  const selectGrammar = (grammar: Grammar) => {
    if (!imgSrc().includes(grammar.path)) {
      setSelectItemPath(grammar.path);
      setImgLoaded(false);
      setImgSrc(`${IP}/file/${grammar.path}`);
    }
  };

  const prePage = () => {
    setImgLoaded(false);
    const page = Number(selectItemPath().split("(")[1].split(")")[0]) - 1;
    const preFix = selectItemPath().split("(")[0];
    const suffix = selectItemPath().split("(")[1].split(")")[1];
    setSelectItemPath(`${preFix}(${page})${suffix}`);
    setImgSrc(`${IP}/file/${preFix}(${page})${suffix}`);
  };
  const nextPage = () => {
    setImgLoaded(false);
    const page = Number(selectItemPath().split("(")[1].split(")")[0]) + 1;
    const preFix = selectItemPath().split("(")[0];
    const suffix = selectItemPath().split("(")[1].split(")")[1];
    setSelectItemPath(`${preFix}(${page})${suffix}`);
    setImgSrc(`${IP}/file/${preFix}(${page})${suffix}`);
  };
  return (
    <div grid="~ lg:cols-2" h-screen gap-2>
      <div h-full grid="~ rows-[min-content_min-content_1fr]" of-hidden mx-5>
        <div flex items-center justify-center gap-2>
          <h4>文法查阅3046 V1.1</h4>
          <div flex-1></div>
          <For each={bookList}>
            {(book, i) => (
              <div
                flex
                gap-1
                items-center
                cursor-pointer
                onClick={() => {
                  setBookList(
                    bookList.map((bk) =>
                      bk.name !== book.name ? bk : { ...bk, show: !bk.show }
                    )
                  );
                }}
              >
                <div
                  i-carbon-book
                  class={
                    i() === 0
                      ? "text-blue"
                      : i() === 1
                      ? "text-yellow"
                      : i() === 2
                      ? "text-green"
                      : "text-purple"
                  }
                  grayscale={book.show ? "1" : ""}
                ></div>
                <div text-xs hidden lg:visible>
                  {book.name}
                </div>
              </div>
            )}
          </For>
        </div>
        <div
          shadow
          border="~ gray op30 rounded"
          relative
          flex
          items-center
          justify-center
        >
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
          <Show when={title()}>
            <div
              i-carbon-close
              mr-6
              op50
              w-6
              h-6
              onClick={() => {
                setTitle("");
              }}
            ></div>
          </Show>
        </div>
        <div border="l b r gray op30" mx-2 of-auto>
          <Show when={bookList[0].show}>
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
                  <div bg-blue i-carbon-book></div>
                </div>
              )}
            </For>
          </Show>
          <Show when={bookList[1].show}>
            <For each={preGrammar()}>
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
                  <div bg-amber i-carbon-book></div>
                </div>
              )}
            </For>
          </Show>
          <Show when={bookList[2].show}>
            <For each={masterGrammar()}>
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
                  <div bg-green i-carbon-book></div>
                </div>
              )}
            </For>
          </Show>
          <Show when={bookList[3].show}>
            <For each={dicGrammar()}>
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
                  <div bg-purple i-carbon-book></div>
                </div>
              )}
            </For>
          </Show>
        </div>
      </div>
      <div of-hidden mx-5 relative h-full flex items-center justify-center>
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
            <div i-line-md-loading-twotone-loop w-10 h-10></div>
          </div>
        </Show>
        <Show when={imgSrc() !== ""}>
          <div
            absolute
            left-6
            w-8
            h-8
            rounded-full
            bg="black op50"
            justify-center
            flex
            items-center
            text-white
            op30
            onClick={prePage}
            class="top-1/2"
            hover="op50"
          >
            <div i-carbon-arrow-left></div>
          </div>
          <div
            absolute
            right-6
            w-8
            h-8
            rounded-full
            bg="black op50"
            justify-center
            flex
            items-center
            text-white
            op30
            onClick={nextPage}
            class="top-1/2"
            hover="op50"
          >
            <div i-carbon-arrow-right></div>
          </div>
        </Show>
        <div of-auto w-full h-full>
          <img
            z-50
            object-contain
            w-full
            src={imgSrc()}
            alt=""
            onLoad={() => setImgLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Grammar;
