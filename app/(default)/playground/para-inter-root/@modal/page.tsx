// @modalと同階層にあるlayoutのpropsに以下のpageが渡されることで並列表示を実現する
// イメージだと以下が同時に表示される。@modalはセグメントに含まれない
// /para-inter-root       /page.tsx
// /para-inter-root/@modal/page.tsx
export default function Page() {
  return <div>/para-inter-root/の時に表示される</div>
}
