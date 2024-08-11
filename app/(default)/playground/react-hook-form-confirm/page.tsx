import ConfirmForm from '@/app/(default)/playground/react-hook-form-confirm/component/confirm-form'
import UserFormContextForm from '@/app/(default)/playground/react-hook-form-confirm/component/user-form-context-form'

export default function Page() {
  // ユーザメニュー実装
  return (
    <>
      <div className="flex flex-col gap-4 py-4">
        <ConfirmForm />
        <hr />
        <UserFormContextForm />
      </div>
    </>
  )
}
