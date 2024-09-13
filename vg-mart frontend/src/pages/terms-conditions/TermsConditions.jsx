
const TermsConditions = () => {
    return (
        <div className="page p-3">
            <div className="container">
                <div className="terms">
                    {/* Header */}
                    <div className="terms__header">
                        <div className="row">
                            <div className="col-xs-12">
                                <h3 className="text-center">Terms &amp; Conditions have changed.</h3>
                            </div>
                        </div>
                    </div>
                    {/* / */}
                    {/* Alert */}
                    <div className="terms__alert">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="alert alert-info terms__alert" role="alert">
                                    <div>The terms &amp; conditions have been updated to include:</div>
                                    <ul>
                                        <li>
                                            Additional information regarding authenticating with social
                                            media
                                        </li>
                                    </ul>
                                    <div>
                                        Please read and agree to the terms &amp; conditions in order to
                                        use this service.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* / */}
                    {/* Content */}
                    <div className="terms__content">
                        {/* Tab Panels */}
                        <div className="terms__content--tabs">
                            <div className="row">
                                <div className="col-xs-12">
                                    {/* Tabs */}
                                    <div>

                                        <div className="tab-content">
                                            {/* Terms & Conditions */}
                                            <div role="tabpanel" className="tab-pane active" id="home">
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <div className="text-center">
                                                            <a href="#">
                                                                <i className="fa fa-paper-plane" />
                                                                <span>Send by email</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <strong>TERMS &amp; CONDITIONS</strong>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the industrys
                                                    standard dummy text ever since the 1500s, when an unknown
                                                    printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries,
                                                    but also the leap into electronic typesetting, remaining
                                                    essentially unchanged. It was popularised in the 1960s with
                                                    the release of Letraset sheets containing Lorem Ipsum
                                                    passages, and more recently with desktop publishing software
                                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                                </p>
                                                <p>
                                                    It is a long established fact that a reader will be
                                                    distracted by the readable content of a page when looking at
                                                    its layout. The point of using Lorem Ipsum is that it has a
                                                    more-or-less normal distribution of letters, as opposed to
                                                    using Content here, content here, making it look like
                                                    readable English. Many desktop publishing packages and web
                                                    page editors now use Lorem Ipsum as their default model
                                                    text, and a search for lorem ipsum will uncover many web
                                                    sites still in their infancy. Various versions have evolved
                                                    over the years, sometimes by accident, sometimes on purpose
                                                    (injected humour and the like).
                                                </p>
                                                <p>
                                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                                    text. It has roots in a piece of classical Latin literature
                                                    from 45 BC, making it over 2000 years old. Richard
                                                    McClintock, a Latin professor at Hampden-Sydney College in
                                                    Virginia, looked up one of the more obscure Latin words,
                                                    consectetur, from a Lorem Ipsum passage, and going through
                                                    the cites of the word in classical literature, discovered
                                                    the undoubtable source. Lorem Ipsum comes from sections
                                                    1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The
                                                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                                                    book is a treatise on the theory of ethics, very popular
                                                    during the Renaissance. The first line of Lorem Ipsum,
                                                    Lorem ipsum dolor sit amet.., comes from a line in section
                                                    1.10.32.
                                                </p>
                                                <p>
                                                    The standard chunk of Lorem Ipsum used since the 1500s is
                                                    reproduced below for those interested. Sections 1.10.32 and
                                                    1.10.33 from de Finibus Bonorum et Malorum by Cicero are
                                                    also reproduced in their exact original form, accompanied by
                                                    English versions from the 1914 translation by H. Rackham.
                                                </p>
                                            </div>
                                        </div>
                                        {/* / */}
                                    </div>
                                    {/* / */}
                                </div>
                            </div>
                        </div>
                        {/* / */}
                        {/* Agreement */}
                        <div className="terms__content--agreement">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> I agree to the terms &amp; conditions
                                            and privacy policy
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* / */}
                        {/* Actions */}
                        <div className="terms__content--actions">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="pull-right">
                                        <button type="button" className="btn btn-sm btn-default">
                                            Cancel
                                        </button>
                                        <button type="button" className="btn btn-sm btn-success">
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* / */}
                    </div>
                    {/* / */}
                </div>
            </div>

        </div>
    )
}

export default TermsConditions
