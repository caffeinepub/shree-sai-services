import Time "mo:core/Time";
import Int "mo:core/Int";
import Array "mo:core/Array";
import List "mo:core/List";
import Order "mo:core/Order";

actor {
  type Submission = {
    name : Text;
    phone : Text;
    message : Text;
    formType : Text;
    submittedAt : Int;
  };

  module Submission {
    public func compare(s1 : Submission, s2 : Submission) : Order.Order {
      Int.compare(s2.submittedAt, s1.submittedAt);
    };
  };

  let submissionList = List.empty<Submission>();

  public shared ({ caller }) func submitForm(
    name : Text,
    phone : Text,
    message : Text,
    formType : Text,
  ) : async () {
    let submission : Submission = {
      name;
      phone;
      message;
      formType;
      submittedAt = Time.now();
    };
    submissionList.add(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissionList.toArray().sort();
  };
};
