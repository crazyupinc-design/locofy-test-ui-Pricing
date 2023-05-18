import { FunctionComponent } from "react";
import styles from "./PricingComparison.module.css";
const PricingComparison: FunctionComponent = () => {
  return (
    <div className={styles.pricingComparison}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.intro}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.pricing1Icon}
                alt=""
                src="/pricing1@2x.png"
              />
            </div>
            <div className={styles.name}>
              <div className={styles.startup}>Startup</div>
              <div className={styles.startingAt}>Starting at</div>
            </div>
            <div className={styles.pricing}>
              <b className={styles.mo}>$599/mo</b>
            </div>
            <div className={styles.description}>
              <div className={styles.loremIpsumDolor}>Lorem ipsum dolor</div>
            </div>
            <div className={styles.button}>
              <div className={styles.talkToAn}>TALK TO AN EXPERT</div>
            </div>
          </div>
          <div className={styles.separator} />
          <div className={styles.features}>
            <div className={styles.pricingFeature}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
              <div className={styles.featureItem}>
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className={styles.pricingFeature}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
              <div className={styles.featureItem}>
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className={styles.pricingFeature}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
              <div className={styles.featureItem}>
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className={styles.pricingFeature}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
              <div className={styles.featureItem}>
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className={styles.pricingFeature}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
              <div className={styles.featureItem}>
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className={styles.pricingFeature}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
              </div>
              <div className={styles.featureItem}>
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column1}>
          <div className={styles.intro}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.pricing1Icon}
                alt=""
                src="/pricing2@2x.png"
              />
            </div>
            <div className={styles.name}>
              <div className={styles.startup}>Growth</div>
              <div className={styles.startingAt}>Starting at</div>
            </div>
            <div className={styles.pricing}>
              <b className={styles.mo}>$1,499/mo</b>
            </div>
            <div className={styles.description}>
              <div className={styles.loremIpsumDolor}>Lorem ipsum dolor</div>
            </div>
            <div className={styles.button1}>
              <div className={styles.talkToAn}>TALK TO AN EXPERT</div>
            </div>
          </div>
          <div className={styles.separator} />
          <div className={styles.features}>
            <div className={styles.pricingFeature}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
              </div>
              <div className={styles.featureItem}>
                Etiam sodales ac felis id interdum
              </div>
            </div>
            <div className={styles.pricingFeature}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
              <div className={styles.featureItem}>
                Etiam sodales ac felis id interdum
              </div>
            </div>
            <div className={styles.pricingFeature}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
              <div className={styles.featureItem}>
                Etiam sodales ac felis id interdum
              </div>
            </div>
            <div className={styles.pricingFeature}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
              <div className={styles.featureItem}>
                Etiam sodales ac felis id interdum
              </div>
            </div>
            <div className={styles.pricingFeature}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
              </div>
              <div className={styles.featureItem}>
                Etiam sodales ac felis id interdum
              </div>
            </div>
            <div className={styles.pricingFeature}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
              </div>
              <div className={styles.featureItem}>
                Etiam sodales ac felis id interdum
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.intro}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.pricing1Icon}
                alt=""
                src="/pricing1@2x.png"
              />
            </div>
            <div className={styles.name}>
              <div className={styles.startup}>Enterprise</div>
              <div className={styles.startingAt}>Starting at</div>
            </div>
            <div className={styles.pricing}>
              <b className={styles.mo}>$2,499/mo</b>
            </div>
            <div className={styles.description}>
              <div className={styles.loremIpsumDolor}>Lorem ipsum dolor</div>
            </div>
            <div className={styles.button}>
              <div className={styles.talkToAn}>TALK TO AN EXPERT</div>
            </div>
          </div>
          <div className={styles.separator} />
          <div className={styles.features2}>
            <div className={styles.pricingFeature12}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
              <div className={styles.featureItem}>
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className={styles.pricingFeature12}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
              <div className={styles.featureItem}>
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className={styles.pricingFeature12}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
              <div className={styles.featureItem}>
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className={styles.pricingFeature12}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
              <div className={styles.featureItem}>
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className={styles.pricingFeature12}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
              <div className={styles.featureItem}>
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className={styles.pricingFeature12}>
              <div className={styles.icon}>
                <div className={styles.icon}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
              </div>
              <div className={styles.featureItem}>
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComparison;
