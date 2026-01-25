English Below ↓

# Kintone プラグインテンプレート↓

Vite、Svelte 5、Kintone UI Components を使用した i18n 対応の Kintone プラグインテンプレートです。

## セットアップ↓

```bash
git clone https://github.com/seanluse41/Modern-Modern-Kintone-Plugin-Template
cd Modern-Modern-Kintone-Plugin-Template
npm i
npm run build
npm run pack
npm run upload  # または手動でアップロード
```

## 構造

### エントリーポイント

プラグインは `src/js/desktop.js` から開始され、デフォルトで `app.record.index.show` イベントを登録します。このファイルは:
- `kintone.plugin.app.getConfig(PLUGIN_ID)` でプラグイン設定値にアクセス
- `App.svelte` を DOM にマウント
- 設定とイベントデータを Svelte コンポーネントに渡す

`App.svelte` から他の Svelte コンポーネントをインポートして使用できます。

### Kintone UI Components

KUC コンポーネントは `src/svelte/builders/desktop/` または　`/mobile` に Svelte化されています。例:

```svelte
<script>
  import Button from "../builders/desktop/button.svelte";
</script>

<Button
  text="クリック"
  type="submit"
  onclick={() => alert("ボタンがクリックされました")}
/>
```

### 多言語

翻訳は `src/locales/` で管理され、言語ごとに個別の JSON ファイル(例: `en.json`、`ja.json`)があります。

初期直はkintoneユーザの言語設定で判定しています：

``` js
// src/i18n.js
const getUserLanguage = async () => {
  try {
    const user = await kintone.getLoginUser();
    if (user.language) {
      return user.language;
    }
  } catch (error) {
    console.error('Error getting user language:', error);
  }
```

新しい言語を追加するには:
1. `src/locales/` に新しい JSON ファイルを作成(例: `fr.json`)
2. `i18n.js` でインポート
3. `messages` オブジェクトに追加

新しい翻訳を追加するには、ロケール JSON ファイルにキーを追加します:

```json
{
  "welcome": "ようこそ",
  "button_save": "保存"
}
```

Svelte での使用:

```svelte
<script>
  import { t } from "../js/i18n.js";
</script>

<p>{$t('welcome')}</p>
```

---

# Kintone Plugin Template

A Kintone plugin template using Vite, Svelte 5, and Kintone UI Components with i18n support.

## Setup

```bash
git clone https://github.com/seanluse41/Modern-Modern-Kintone-Plugin-Template
cd Modern-Modern-Kintone-Plugin-Template
npm i
npm run build
npm run pack
npm run upload  # or upload manually
```

## Structure

### Entry Point

The plugin starts at `src/js/desktop.js`, which registers the `app.record.index.show` event by default. This file:
- Accesses plugin config values via `kintone.plugin.app.getConfig(PLUGIN_ID)`
- Mounts `App.svelte` to the DOM
- Passes config and event data to the Svelte component

From `App.svelte`, you can import and use other Svelte components.

### Kintone UI Components

KUC components are wrapped in Svelte files located in `src/svelte/builders/desktop/` or `/builders/mobile/`. Use them like this:

```svelte
<script>
  import Button from "../builders/desktop/button.svelte";
</script>

<Button
  text="Click Me"
  type="submit"
  onclick={() => alert("Button clicked!")}
/>
```

Available wrappers include Button, Dropdown, Text, and others from the Kintone UI Components library.

### i18n

Translations are managed in `src/locales/` with separate JSON files for each language (e.g., `en.json`, `ja.json`).

The initial language value is set via the Kintone user's settings.

``` js
// src/i18n.js
const getUserLanguage = async () => {
  try {
    const user = await kintone.getLoginUser();
    if (user.language) {
      return user.language;
    }
  } catch (error) {
    console.error('Error getting user language:', error);
  }
```

To add a new language:
1. Create a new JSON file in `src/locales/` (e.g., `fr.json`)
2. Import it in `i18n.js`
3. Add it to the `messages` object

To add new translations, add keys to your locale JSON files:

```json
{
  "welcome": "Welcome",
  "button_save": "Save"
}
```

Use in Svelte:

```svelte
<script>
  import { t } from "../js/i18n.js";
</script>

<p>{$t('welcome')}</p>
```