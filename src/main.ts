import { controllerState, saveButton, textInput, loadButton, sceneSelect, scene, contextfactors, contextfactorButtons, minorcontextButton, minorcontext } from "./constant";

function withAtsumaru(fn: (atsumaru: RPGAtsumaruApi) => void) {
    const atsumaru = window.RPGAtsumaru;
    if (atsumaru) fn(atsumaru);
    else console.log("RPGAtsumaruオブジェクトが存在しません");
}

// コメント用のゲームポジションを切り替えるイベントを設定します
sceneSelect.addEventListener("change", () => {
    withAtsumaru(atsumaru => atsumaru.comment.resetAndChangeScene(sceneSelect.value));
    scene.textContent = sceneSelect.value;
    contextfactors.map(factor => factor.textContent = "");
    minorcontext.textContent = "0";
});
contextfactorButtons.forEach(button => button.addEventListener("click", () => {
    withAtsumaru(atsumaru => atsumaru.comment.pushContextFactor(button.textContent!));
    for(let i = 0; i < 3; i++) {
        contextfactors[i].textContent = i == 2 ? button.textContent : contextfactors[i+1].textContent;
    }
    minorcontext.textContent = "0";
}));
minorcontextButton.addEventListener("click", () => {
    withAtsumaru(atsumaru => atsumaru.comment.pushMinorContext());
    minorcontext.textContent = String(Number(minorcontext.textContent!) + 1);
});

// バーチャルコントローラーの操作を受け取るイベントを設定します
withAtsumaru(atsumaru => {
    const downKeys: string[] = [];
    atsumaru.controllers.defaultController.subscribe(info => {
        if (info.type === "keydown" && downKeys.indexOf(info.key) === -1) downKeys.push(info.key);
        if (info.type === "keyup" && downKeys.indexOf(info.key) !== -1) downKeys.splice(downKeys.indexOf(info.key), 1);
        controllerState.textContent = JSON.stringify(downKeys);
    });
});

// 入力欄の文字列を保存&読み込みするイベントを設定します
saveButton.addEventListener("click", () => {
    const value = textInput.value;
    withAtsumaru(atsumaru =>
        atsumaru.storage.setItems([{key: "system", value}])
        .then(() => textInput.value = "")
        .catch((error: AtsumaruApiError) => console.error(error.message))
    );
});
loadButton.addEventListener("click", () => {
    withAtsumaru(atsumaru =>
        atsumaru.storage.getItems().then(items => items.filter(i => i.key === "system").forEach(i => textInput.value = i.value))
        .catch((error: AtsumaruApiError) => console.error(error.message))
    );
});
