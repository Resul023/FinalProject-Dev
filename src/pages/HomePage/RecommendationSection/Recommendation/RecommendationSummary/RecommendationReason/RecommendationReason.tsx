import "./RecommendationReason.scss";

export const RecommendationReason: React.FC = () => {
  return (
    <div className="recommendation_reason">
      <p className="reason_summary">Because we...</p>
      <p className="reason_summary_text">
        <img
          className="quote-right"
          src={require("../../../../../../image/HomePage/quote-right.png")}
          alt="quote-right"
        />
        We don't accept half-measures and shortcuts, because what we care about
        is the WOW effect. And all the luck that our efforts are not in vain. We
        know this because we closely follow the opinions of our consumers.
      </p>
    </div>
  );
};
