function ChangePassword() {
  return (
    <main
      class="eds-structure__main snipcss-gHksn"
      data-spec="eds-structure-main"
    >
      <section
        class="eds-layout eds-layout--has-large-max-width eds-layout--has-horizontal-gutters"
        data-spec="eds-layout"
      >
        <div class="eds-layout__body" data-spec="eds-layout__body">
          <div>
            <div class="eds-l-mar-top-18 eds-l-sn-mar-left-2 eds-l-sm-mar-left-2 eds-l-sw-mar-left-2 eds-l-mn-mar-left-4 eds-l-md-mar-left-10 eds-l-mw-mar-left-10 eds-l-ln-mar-left-20 eds-l-lg-mar-left-20 eds-l-mar-left-20">
              <div class="eds-l-mar-bot-4">
                <h1 class="eds-text-hm account-settings__heading">
                  Your password
                </h1>
              </div>
              <hr
                class="eds-divider__hr eds-bg-color--ui-300 eds-divider--horizontal"
                data-spec="divider-hr"
                aria-hidden="true"
              />
              <div class="eds-g-cell eds-g-cell-md-4-12 eds-l-pad-top-4">
                <div class="eds-l-pad-bot-5">Set a new password.</div>
                <div class="eds-fx--fade-in eds-fx--delay-2">
                  <form novalidate="" method="post">
                    <div class="eds-l-pad-bot-3">
                      <div class="eds-password--v2">
                        <div
                          class="eds-field-styled eds-field-styled--static eds-field-styled--error style-ehH7R"
                          data-automation="current_password-field-wrapper"
                          data-testid="input-field-wrapper"
                          data-spec="input-field"
                          data-heap-redact-attributes="data-val"
                          id="style-ehH7R"
                        >
                          <div class="eds-field-styled__border-simulation">
                            <div class="eds-field-styled__internal">
                              <div class="eds-field-styled__input-container">
                                <div class="eds-field-styled__label-wrapper">
                                  <label
                                    class="eds-field-styled__label eds-label-primary eds-field-styled__label--required"
                                    id="current_password-label"
                                    for="current_password"
                                    data-spec="label-label"
                                  >
                                    <span class="eds-label__content">
                                      Current Password
                                    </span>
                                    <span
                                      class="eds-label__required-indicator eds-text-bs"
                                      data-spec="required-indicator"
                                    >
                                      <span> *</span>
                                      <span class="eds-is-hidden-accessible">
                                        (required)
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <input
                                  data-spec="input-field-input-element"
                                  aria-invalid="true"
                                  aria-required="true"
                                  class="eds-field-styled__input eds-field-styled__input--has-suffix"
                                  data-automation="current_password-field"
                                  id="current_password"
                                  name="current_password"
                                  type="password"
                                  meta="[object Object]"
                                  value=""
                                />
                              </div>
                              <span class="eds-field-styled__aside eds-field-styled__aside-suffix eds-field-styled__aside--minimal-spacing">
                                <div
                                  class="eds-password-icon__wrapper"
                                  data-spec="password-icon-button"
                                >
                                  <span
                                    class="eds-icon-button eds-icon-button--neutral"
                                    data-spec="icon-button"
                                  >
                                    <button
                                      class="eds-btn--button eds-btn--none eds-btn--icon-only"
                                      type="button"
                                    >
                                      <i
                                        class="eds-vector-image eds-icon--small eds-vector-image--block"
                                        title=""
                                        data-spec="icon"
                                        data-testid="icon"
                                      >
                                        <svg
                                          id="eye-on-chunky_svg__eds-icon--eye-on-chunky_svg"
                                          x="0"
                                          y="0"
                                          viewBox="0 0 24 24"
                                          xml:space="preserve"
                                        >
                                          <path
                                            id="eye-on-chunky_svg__eds-icon--eye-on-chunky_base"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12 16.2c-2.3 0-4.2-1.9-4.2-4.2 0-2.3 1.9-4.2 4.2-4.2 2.3 0 4.2 1.9 4.2 4.2 0 2.3-1.9 4.2-4.2 4.2zm0-10.5c-4.2 0-7.8 2.6-9.2 6.3 1.5 3.7 5 6.3 9.2 6.3s7.8-2.6 9.2-6.3c-1.4-3.7-5-6.3-9.2-6.3z"
                                          ></path>
                                          <circle
                                            id="eye-on-chunky_svg__eds-icon--eye-on-chunky_dot"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            cx="12"
                                            cy="12"
                                            r="2.5"
                                          ></circle>
                                        </svg>
                                        <span class="eds-is-hidden-accessible">
                                          password visibility button
                                        </span>
                                      </i>
                                    </button>
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div class="eds-field__sub">
                            <div class="eds-field__sub--left">
                              <aside
                                class="eds-field-styled__annotation eds-text-bs eds-fx--fade-in eds-l-pad-top-1"
                                data-automation="eds-field-annotation"
                                role="alert"
                              >
                                Current password is required
                              </aside>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="eds-l-pad-bot-3">
                      <div class="eds-password--v2">
                        <div
                          class="eds-field-styled style-HC77o"
                          data-automation="new_password-field-wrapper"
                          data-testid="input-field-wrapper"
                          data-spec="input-field"
                          data-heap-redact-attributes="data-val"
                          id="style-HC77o"
                        >
                          <div class="eds-field-styled__border-simulation">
                            <div class="eds-field-styled__internal">
                              <div class="eds-field-styled__input-container">
                                <div class="eds-field-styled__label-wrapper">
                                  <label
                                    class="eds-field-styled__label eds-label-primary eds-field-styled__label--required"
                                    id="new_password-label"
                                    for="new_password"
                                    data-spec="label-label"
                                  >
                                    <span class="eds-label__content">
                                      New Password
                                    </span>
                                    <span
                                      class="eds-label__required-indicator eds-text-bm"
                                      data-spec="required-indicator"
                                    >
                                      <span> *</span>
                                      <span class="eds-is-hidden-accessible">
                                        (required)
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <input
                                  data-spec="input-field-input-element"
                                  aria-invalid="false"
                                  aria-required="true"
                                  class="eds-field-styled__input eds-field-styled__input--has-suffix"
                                  data-automation="new_password-field"
                                  id="new_password"
                                  name="new_password"
                                  type="password"
                                  meta="[object Object]"
                                  value=""
                                />
                              </div>
                              <span class="eds-field-styled__aside eds-field-styled__aside-suffix eds-field-styled__aside--minimal-spacing">
                                <div
                                  class="eds-password-icon__wrapper"
                                  data-spec="password-icon-button"
                                >
                                  <span
                                    class="eds-icon-button eds-icon-button--neutral"
                                    data-spec="icon-button"
                                  >
                                    <button
                                      class="eds-btn--button eds-btn--none eds-btn--icon-only"
                                      type="button"
                                    >
                                      <i
                                        class="eds-vector-image eds-icon--small eds-vector-image--block"
                                        title=""
                                        data-spec="icon"
                                        data-testid="icon"
                                      >
                                        <svg
                                          id="eye-on-chunky_svg__eds-icon--eye-on-chunky_svg"
                                          x="0"
                                          y="0"
                                          viewBox="0 0 24 24"
                                          xml:space="preserve"
                                        >
                                          <path
                                            id="eye-on-chunky_svg__eds-icon--eye-on-chunky_base"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12 16.2c-2.3 0-4.2-1.9-4.2-4.2 0-2.3 1.9-4.2 4.2-4.2 2.3 0 4.2 1.9 4.2 4.2 0 2.3-1.9 4.2-4.2 4.2zm0-10.5c-4.2 0-7.8 2.6-9.2 6.3 1.5 3.7 5 6.3 9.2 6.3s7.8-2.6 9.2-6.3c-1.4-3.7-5-6.3-9.2-6.3z"
                                          ></path>
                                          <circle
                                            id="eye-on-chunky_svg__eds-icon--eye-on-chunky_dot"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            cx="12"
                                            cy="12"
                                            r="2.5"
                                          ></circle>
                                        </svg>
                                        <span class="eds-is-hidden-accessible">
                                          password visibility button
                                        </span>
                                      </i>
                                    </button>
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="eds-l-pad-bot-3">
                      <div class="eds-password--v2">
                        <div
                          class="eds-field-styled style-LlhJR"
                          data-automation="repeat_password-field-wrapper"
                          data-testid="input-field-wrapper"
                          data-spec="input-field"
                          data-heap-redact-attributes="data-val"
                          id="style-LlhJR"
                        >
                          <div class="eds-field-styled__border-simulation">
                            <div class="eds-field-styled__internal">
                              <div class="eds-field-styled__input-container">
                                <div class="eds-field-styled__label-wrapper">
                                  <label
                                    class="eds-field-styled__label eds-label-primary eds-field-styled__label--required"
                                    id="repeat_password-label"
                                    for="repeat_password"
                                    data-spec="label-label"
                                  >
                                    <span class="eds-label__content">
                                      Repeat Password
                                    </span>
                                    <span
                                      class="eds-label__required-indicator eds-text-bm"
                                      data-spec="required-indicator"
                                    >
                                      <span> *</span>
                                      <span class="eds-is-hidden-accessible">
                                        (required)
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <input
                                  data-spec="input-field-input-element"
                                  aria-invalid="false"
                                  aria-required="true"
                                  class="eds-field-styled__input eds-field-styled__input--has-suffix"
                                  data-automation="repeat_password-field"
                                  id="repeat_password"
                                  name="repeat_password"
                                  type="password"
                                  meta="[object Object]"
                                  value=""
                                />
                              </div>
                              <span class="eds-field-styled__aside eds-field-styled__aside-suffix eds-field-styled__aside--minimal-spacing">
                                <div
                                  class="eds-password-icon__wrapper"
                                  data-spec="password-icon-button"
                                >
                                  <span
                                    class="eds-icon-button eds-icon-button--neutral"
                                    data-spec="icon-button"
                                  >
                                    <button
                                      class="eds-btn--button eds-btn--none eds-btn--icon-only"
                                      type="button"
                                    >
                                      <i
                                        class="eds-vector-image eds-icon--small eds-vector-image--block"
                                        title=""
                                        data-spec="icon"
                                        data-testid="icon"
                                      >
                                        <svg
                                          id="eye-on-chunky_svg__eds-icon--eye-on-chunky_svg"
                                          x="0"
                                          y="0"
                                          viewBox="0 0 24 24"
                                          xml:space="preserve"
                                        >
                                          <path
                                            id="eye-on-chunky_svg__eds-icon--eye-on-chunky_base"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12 16.2c-2.3 0-4.2-1.9-4.2-4.2 0-2.3 1.9-4.2 4.2-4.2 2.3 0 4.2 1.9 4.2 4.2 0 2.3-1.9 4.2-4.2 4.2zm0-10.5c-4.2 0-7.8 2.6-9.2 6.3 1.5 3.7 5 6.3 9.2 6.3s7.8-2.6 9.2-6.3c-1.4-3.7-5-6.3-9.2-6.3z"
                                          ></path>
                                          <circle
                                            id="eye-on-chunky_svg__eds-icon--eye-on-chunky_dot"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            cx="12"
                                            cy="12"
                                            r="2.5"
                                          ></circle>
                                        </svg>
                                        <span class="eds-is-hidden-accessible">
                                          password visibility button
                                        </span>
                                      </i>
                                    </button>
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="eds-l-mar-top-4 eds-l-mar-bot-8"
                        data-automation="password-strength-meter"
                      >
                        <div>
                          <div
                            class="eds-progress-indicator--linear__rail style-PvpCO"
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-label="progressbar"
                            id="style-PvpCO"
                          >
                            <div
                              class="eds-progress-indicator--linear__line eds-progress-indicator--linear-determinate__line style-KDpfI"
                              id="style-KDpfI"
                            ></div>
                          </div>
                          <progress
                            class="eds-is-hidden-accessible"
                            value="0"
                            max="100"
                          ></progress>
                        </div>
                        <div class="eds-l-pad-top-2 eds-text-bs">
                          <span>Your password </span>
                          <span class="">must be at least 8 characters</span>
                        </div>
                      </div>
                    </div>
                    <button
                      data-automation="set-password-submit"
                      class="eds-btn eds-btn--submit eds-btn--fill"
                      type="submit"
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default ChangePassword;
