import { Problem } from "./models/problem.model";

//Define a Problem[] which contains five problem objects 
export const PROBLEMS: Problem[] = [
    {
      "id": 1,
      "name": "Two Sum",
      "desc": "Given an array of integers, return indices of the two numbers such that they add up to a specific target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
      "difficulty": "easy"
    },
  
    {
      "id": 2,
      "name": "3Sum",
      "desc": "Given an array S of n integers, are there three elements in S such that they add up to a specific target.\n\nFind all unique triplets in S which gives the sum equaul to the target.",
      "difficulty": "medium"
    },
  
    {
      "id": 3,
      "name": "4Sum",
      "desc": "Given an array S of n integers, are there four elements in S such that they add up to a specific target.\n\nFind all unique quadruplets in S which gives the sum equaul to the target.",
      "difficulty": "medium"
    },
  
    {
      "id": 4,
      "name": "Triangle Count",
      "desc": "Given an array of integers, how many three numbers can be found in the array, so that we can build an triangle whose edges length is the three numbers that we find?",
      "difficulty": "hard"
    },
  
    {
      "id": 5,
      "name": "Sliding Window Maximum",
      "desc": "Given an array of integers, there is a sliding window of size k which is moving from the left of the array to the very right.\n\nYou can only see the k numbers in the window. Each time the sliding window moves right by one position.",
      "difficulty": "super"
    }
  ];