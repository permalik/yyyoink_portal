import {createFileRoute} from "@tanstack/react-router"
import {AnyFieldApi, useForm} from "@tanstack/react-form";
import "../styles/account.css";

export const Route = createFileRoute("/account")({
    component: Account,
})

function FieldInfo({field}: { field: AnyFieldApi }) {
    return (
        <>
            {field.state.meta.isTouched && field.state.meta.errors.length ? (
                <em>{field.state.meta.errors.join(",")}</em>
            ) : null}
            {field.state.meta.isValidating ? "Validating.." : null}
        </>
    )
}

function Account() {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        onSubmit: async ({value}) => {
            console.log(value)
        },
    })

    return (
        <>
            <h1 className={"account-headingone"}>
                Create Account
            </h1>
            <section className={"account-create-section"}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        form.handleSubmit()
                    }}
                >
                    <div className={"account-form-field"}>
                        <form.Field
                            name={"email"}
                            validators={{
                                onChange: ({value}) =>
                                    !value ? "Email is required" : undefined,
                                onChangeAsyncDebounceMs: 500,
                                onChangeAsync: async ({value}) => {
                                    await new Promise((resolve) => setTimeout(resolve, 1000))
                                    return (
                                        !value.includes("@") && "Invalid email"
                                    )
                                },
                            }}
                            children={(field) => {
                                return (
                                    <>
                                        <input
                                            className={"account-form-input"}
                                            id={field.name}
                                            name={field.name}
                                            placeholder={"Email"}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                        />
                                        <FieldInfo field={field}/>
                                    </>
                                )
                            }}
                        />
                    </div>
                    <div className={"account-form-field"}>
                        <form.Field
                            name={"password"}
                            validators={{
                                onChange: ({value}) =>
                                    !value ? "Password is required" : undefined,
                                onChangeAsyncDebounceMs: 500,
                                onChangeAsync: async ({value}) => {
                                    await new Promise((resolve) => setTimeout(resolve, 1000))
                                    return (
                                        value.includes("error") && "Must not include error"
                                    )
                                },
                            }}
                            children={(field) => {
                                return (
                                    <>
                                        <input
                                            className={"account-form-input"}
                                            id={field.name}
                                            name={field.name}
                                            placeholder={"password"}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                        />
                                        <FieldInfo field={field}/>
                                    </>
                                )
                            }}
                        />
                    </div>
                    <form.Subscribe
                        selector={(state) => [state.canSubmit, state.isSubmitting]}
                        children={([canSubmit, isSubmitting]) => (
                            <div className={"account-form-buttons"}>
                                <button type={"submit"} disabled={!canSubmit}>
                                    {isSubmitting ? "..." : "Submit"}
                                </button>
                                <button type={"reset"} onClick={() => form.reset()}>
                                    Reset
                                </button>
                            </div>
                        )}
                    />
                </form>
            </section>
        </>
    )
}