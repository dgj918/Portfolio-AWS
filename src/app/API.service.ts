/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateProjectInput = {
  id?: string | null;
  title: string;
  status: boolean;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
};

export type ModelProjectConditionInput = {
  title?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  startDate?: ModelStringInput | null;
  Estimate?: ModelIntInput | null;
  TimeRemaining?: ModelIntInput | null;
  and?: Array<ModelProjectConditionInput | null> | null;
  or?: Array<ModelProjectConditionInput | null> | null;
  not?: ModelProjectConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateProjectInput = {
  id: string;
  title?: string | null;
  status?: boolean | null;
  startDate?: string | null;
  Estimate?: number | null;
  TimeRemaining?: number | null;
};

export type DeleteProjectInput = {
  id?: string | null;
};

export type CreateStoryInput = {
  id?: string | null;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  storyProjectId: string;
  storySubtasksId: string;
};

export type ModelStoryConditionInput = {
  title?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  type?: ModelStringInput | null;
  startDate?: ModelStringInput | null;
  Estimate?: ModelIntInput | null;
  TimeRemaining?: ModelIntInput | null;
  and?: Array<ModelStoryConditionInput | null> | null;
  or?: Array<ModelStoryConditionInput | null> | null;
  not?: ModelStoryConditionInput | null;
};

export type UpdateStoryInput = {
  id: string;
  title?: string | null;
  status?: boolean | null;
  type?: string | null;
  startDate?: string | null;
  Estimate?: number | null;
  TimeRemaining?: number | null;
  storyProjectId?: string | null;
  storySubtasksId?: string | null;
};

export type DeleteStoryInput = {
  id?: string | null;
};

export type CreateSubTaskInput = {
  id?: string | null;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
};

export type ModelSubTaskConditionInput = {
  title?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  type?: ModelStringInput | null;
  startDate?: ModelStringInput | null;
  Estimate?: ModelIntInput | null;
  TimeRemaining?: ModelIntInput | null;
  and?: Array<ModelSubTaskConditionInput | null> | null;
  or?: Array<ModelSubTaskConditionInput | null> | null;
  not?: ModelSubTaskConditionInput | null;
};

export type UpdateSubTaskInput = {
  id: string;
  title?: string | null;
  status?: boolean | null;
  type?: string | null;
  startDate?: string | null;
  Estimate?: number | null;
  TimeRemaining?: number | null;
};

export type DeleteSubTaskInput = {
  id?: string | null;
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  startDate?: ModelStringInput | null;
  Estimate?: ModelIntInput | null;
  TimeRemaining?: ModelIntInput | null;
  and?: Array<ModelProjectFilterInput | null> | null;
  or?: Array<ModelProjectFilterInput | null> | null;
  not?: ModelProjectFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelStoryFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  type?: ModelStringInput | null;
  startDate?: ModelStringInput | null;
  Estimate?: ModelIntInput | null;
  TimeRemaining?: ModelIntInput | null;
  and?: Array<ModelStoryFilterInput | null> | null;
  or?: Array<ModelStoryFilterInput | null> | null;
  not?: ModelStoryFilterInput | null;
};

export type ModelSubTaskFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  type?: ModelStringInput | null;
  startDate?: ModelStringInput | null;
  Estimate?: ModelIntInput | null;
  TimeRemaining?: ModelIntInput | null;
  and?: Array<ModelSubTaskFilterInput | null> | null;
  or?: Array<ModelSubTaskFilterInput | null> | null;
  not?: ModelSubTaskFilterInput | null;
};

export type CreateProjectMutation = {
  __typename: "Project";
  id: string;
  title: string;
  status: boolean;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  stories: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      title: string;
      status: boolean;
      type: string;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateProjectMutation = {
  __typename: "Project";
  id: string;
  title: string;
  status: boolean;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  stories: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      title: string;
      status: boolean;
      type: string;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteProjectMutation = {
  __typename: "Project";
  id: string;
  title: string;
  status: boolean;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  stories: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      title: string;
      status: boolean;
      type: string;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateStoryMutation = {
  __typename: "Story";
  id: string;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  project: {
    __typename: "Project";
    id: string;
    title: string;
    status: boolean;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  };
  subtasks: {
    __typename: "SubTask";
    id: string;
    title: string;
    status: boolean;
    type: string;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  };
};

export type UpdateStoryMutation = {
  __typename: "Story";
  id: string;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  project: {
    __typename: "Project";
    id: string;
    title: string;
    status: boolean;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  };
  subtasks: {
    __typename: "SubTask";
    id: string;
    title: string;
    status: boolean;
    type: string;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  };
};

export type DeleteStoryMutation = {
  __typename: "Story";
  id: string;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  project: {
    __typename: "Project";
    id: string;
    title: string;
    status: boolean;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  };
  subtasks: {
    __typename: "SubTask";
    id: string;
    title: string;
    status: boolean;
    type: string;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  };
};

export type CreateSubTaskMutation = {
  __typename: "SubTask";
  id: string;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  stories: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      title: string;
      status: boolean;
      type: string;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateSubTaskMutation = {
  __typename: "SubTask";
  id: string;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  stories: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      title: string;
      status: boolean;
      type: string;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteSubTaskMutation = {
  __typename: "SubTask";
  id: string;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  stories: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      title: string;
      status: boolean;
      type: string;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetProjectQuery = {
  __typename: "Project";
  id: string;
  title: string;
  status: boolean;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  stories: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      title: string;
      status: boolean;
      type: string;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListProjectsQuery = {
  __typename: "ModelProjectConnection";
  items: Array<{
    __typename: "Project";
    id: string;
    title: string;
    status: boolean;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetStoryQuery = {
  __typename: "Story";
  id: string;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  project: {
    __typename: "Project";
    id: string;
    title: string;
    status: boolean;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  };
  subtasks: {
    __typename: "SubTask";
    id: string;
    title: string;
    status: boolean;
    type: string;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  };
};

export type ListStorysQuery = {
  __typename: "ModelStoryConnection";
  items: Array<{
    __typename: "Story";
    id: string;
    title: string;
    status: boolean;
    type: string;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    project: {
      __typename: "Project";
      id: string;
      title: string;
      status: boolean;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    };
    subtasks: {
      __typename: "SubTask";
      id: string;
      title: string;
      status: boolean;
      type: string;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    };
  } | null> | null;
  nextToken: string | null;
};

export type GetSubTaskQuery = {
  __typename: "SubTask";
  id: string;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  stories: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      title: string;
      status: boolean;
      type: string;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListSubTasksQuery = {
  __typename: "ModelSubTaskConnection";
  items: Array<{
    __typename: "SubTask";
    id: string;
    title: string;
    status: boolean;
    type: string;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateProjectSubscription = {
  __typename: "Project";
  id: string;
  title: string;
  status: boolean;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  stories: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      title: string;
      status: boolean;
      type: string;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateProjectSubscription = {
  __typename: "Project";
  id: string;
  title: string;
  status: boolean;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  stories: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      title: string;
      status: boolean;
      type: string;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteProjectSubscription = {
  __typename: "Project";
  id: string;
  title: string;
  status: boolean;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  stories: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      title: string;
      status: boolean;
      type: string;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateStorySubscription = {
  __typename: "Story";
  id: string;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  project: {
    __typename: "Project";
    id: string;
    title: string;
    status: boolean;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  };
  subtasks: {
    __typename: "SubTask";
    id: string;
    title: string;
    status: boolean;
    type: string;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnUpdateStorySubscription = {
  __typename: "Story";
  id: string;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  project: {
    __typename: "Project";
    id: string;
    title: string;
    status: boolean;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  };
  subtasks: {
    __typename: "SubTask";
    id: string;
    title: string;
    status: boolean;
    type: string;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnDeleteStorySubscription = {
  __typename: "Story";
  id: string;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  project: {
    __typename: "Project";
    id: string;
    title: string;
    status: boolean;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  };
  subtasks: {
    __typename: "SubTask";
    id: string;
    title: string;
    status: boolean;
    type: string;
    startDate: string;
    Estimate: number;
    TimeRemaining: number;
    stories: {
      __typename: "ModelStoryConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnCreateSubTaskSubscription = {
  __typename: "SubTask";
  id: string;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  stories: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      title: string;
      status: boolean;
      type: string;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateSubTaskSubscription = {
  __typename: "SubTask";
  id: string;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  stories: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      title: string;
      status: boolean;
      type: string;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteSubTaskSubscription = {
  __typename: "SubTask";
  id: string;
  title: string;
  status: boolean;
  type: string;
  startDate: string;
  Estimate: number;
  TimeRemaining: number;
  stories: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      title: string;
      status: boolean;
      type: string;
      startDate: string;
      Estimate: number;
      TimeRemaining: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateProject(
    input: CreateProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<CreateProjectMutation> {
    const statement = `mutation CreateProject($input: CreateProjectInput!, $condition: ModelProjectConditionInput) {
        createProject(input: $input, condition: $condition) {
          __typename
          id
          title
          status
          startDate
          Estimate
          TimeRemaining
          stories {
            __typename
            items {
              __typename
              id
              title
              status
              type
              startDate
              Estimate
              TimeRemaining
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProjectMutation>response.data.createProject;
  }
  async UpdateProject(
    input: UpdateProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<UpdateProjectMutation> {
    const statement = `mutation UpdateProject($input: UpdateProjectInput!, $condition: ModelProjectConditionInput) {
        updateProject(input: $input, condition: $condition) {
          __typename
          id
          title
          status
          startDate
          Estimate
          TimeRemaining
          stories {
            __typename
            items {
              __typename
              id
              title
              status
              type
              startDate
              Estimate
              TimeRemaining
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProjectMutation>response.data.updateProject;
  }
  async DeleteProject(
    input: DeleteProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<DeleteProjectMutation> {
    const statement = `mutation DeleteProject($input: DeleteProjectInput!, $condition: ModelProjectConditionInput) {
        deleteProject(input: $input, condition: $condition) {
          __typename
          id
          title
          status
          startDate
          Estimate
          TimeRemaining
          stories {
            __typename
            items {
              __typename
              id
              title
              status
              type
              startDate
              Estimate
              TimeRemaining
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProjectMutation>response.data.deleteProject;
  }
  async CreateStory(
    input: CreateStoryInput,
    condition?: ModelStoryConditionInput
  ): Promise<CreateStoryMutation> {
    const statement = `mutation CreateStory($input: CreateStoryInput!, $condition: ModelStoryConditionInput) {
        createStory(input: $input, condition: $condition) {
          __typename
          id
          title
          status
          type
          startDate
          Estimate
          TimeRemaining
          project {
            __typename
            id
            title
            status
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
          subtasks {
            __typename
            id
            title
            status
            type
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStoryMutation>response.data.createStory;
  }
  async UpdateStory(
    input: UpdateStoryInput,
    condition?: ModelStoryConditionInput
  ): Promise<UpdateStoryMutation> {
    const statement = `mutation UpdateStory($input: UpdateStoryInput!, $condition: ModelStoryConditionInput) {
        updateStory(input: $input, condition: $condition) {
          __typename
          id
          title
          status
          type
          startDate
          Estimate
          TimeRemaining
          project {
            __typename
            id
            title
            status
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
          subtasks {
            __typename
            id
            title
            status
            type
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStoryMutation>response.data.updateStory;
  }
  async DeleteStory(
    input: DeleteStoryInput,
    condition?: ModelStoryConditionInput
  ): Promise<DeleteStoryMutation> {
    const statement = `mutation DeleteStory($input: DeleteStoryInput!, $condition: ModelStoryConditionInput) {
        deleteStory(input: $input, condition: $condition) {
          __typename
          id
          title
          status
          type
          startDate
          Estimate
          TimeRemaining
          project {
            __typename
            id
            title
            status
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
          subtasks {
            __typename
            id
            title
            status
            type
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStoryMutation>response.data.deleteStory;
  }
  async CreateSubTask(
    input: CreateSubTaskInput,
    condition?: ModelSubTaskConditionInput
  ): Promise<CreateSubTaskMutation> {
    const statement = `mutation CreateSubTask($input: CreateSubTaskInput!, $condition: ModelSubTaskConditionInput) {
        createSubTask(input: $input, condition: $condition) {
          __typename
          id
          title
          status
          type
          startDate
          Estimate
          TimeRemaining
          stories {
            __typename
            items {
              __typename
              id
              title
              status
              type
              startDate
              Estimate
              TimeRemaining
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSubTaskMutation>response.data.createSubTask;
  }
  async UpdateSubTask(
    input: UpdateSubTaskInput,
    condition?: ModelSubTaskConditionInput
  ): Promise<UpdateSubTaskMutation> {
    const statement = `mutation UpdateSubTask($input: UpdateSubTaskInput!, $condition: ModelSubTaskConditionInput) {
        updateSubTask(input: $input, condition: $condition) {
          __typename
          id
          title
          status
          type
          startDate
          Estimate
          TimeRemaining
          stories {
            __typename
            items {
              __typename
              id
              title
              status
              type
              startDate
              Estimate
              TimeRemaining
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSubTaskMutation>response.data.updateSubTask;
  }
  async DeleteSubTask(
    input: DeleteSubTaskInput,
    condition?: ModelSubTaskConditionInput
  ): Promise<DeleteSubTaskMutation> {
    const statement = `mutation DeleteSubTask($input: DeleteSubTaskInput!, $condition: ModelSubTaskConditionInput) {
        deleteSubTask(input: $input, condition: $condition) {
          __typename
          id
          title
          status
          type
          startDate
          Estimate
          TimeRemaining
          stories {
            __typename
            items {
              __typename
              id
              title
              status
              type
              startDate
              Estimate
              TimeRemaining
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSubTaskMutation>response.data.deleteSubTask;
  }
  async GetProject(id: string): Promise<GetProjectQuery> {
    const statement = `query GetProject($id: ID!) {
        getProject(id: $id) {
          __typename
          id
          title
          status
          startDate
          Estimate
          TimeRemaining
          stories {
            __typename
            items {
              __typename
              id
              title
              status
              type
              startDate
              Estimate
              TimeRemaining
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProjectQuery>response.data.getProject;
  }
  async ListProjects(
    filter?: ModelProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjectsQuery> {
    const statement = `query ListProjects($filter: ModelProjectFilterInput, $limit: Int, $nextToken: String) {
        listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            status
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProjectsQuery>response.data.listProjects;
  }
  async GetStory(id: string): Promise<GetStoryQuery> {
    const statement = `query GetStory($id: ID!) {
        getStory(id: $id) {
          __typename
          id
          title
          status
          type
          startDate
          Estimate
          TimeRemaining
          project {
            __typename
            id
            title
            status
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
          subtasks {
            __typename
            id
            title
            status
            type
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStoryQuery>response.data.getStory;
  }
  async ListStorys(
    filter?: ModelStoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStorysQuery> {
    const statement = `query ListStorys($filter: ModelStoryFilterInput, $limit: Int, $nextToken: String) {
        listStorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            status
            type
            startDate
            Estimate
            TimeRemaining
            project {
              __typename
              id
              title
              status
              startDate
              Estimate
              TimeRemaining
            }
            subtasks {
              __typename
              id
              title
              status
              type
              startDate
              Estimate
              TimeRemaining
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStorysQuery>response.data.listStorys;
  }
  async GetSubTask(id: string): Promise<GetSubTaskQuery> {
    const statement = `query GetSubTask($id: ID!) {
        getSubTask(id: $id) {
          __typename
          id
          title
          status
          type
          startDate
          Estimate
          TimeRemaining
          stories {
            __typename
            items {
              __typename
              id
              title
              status
              type
              startDate
              Estimate
              TimeRemaining
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSubTaskQuery>response.data.getSubTask;
  }
  async ListSubTasks(
    filter?: ModelSubTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSubTasksQuery> {
    const statement = `query ListSubTasks($filter: ModelSubTaskFilterInput, $limit: Int, $nextToken: String) {
        listSubTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            status
            type
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSubTasksQuery>response.data.listSubTasks;
  }
  OnCreateProjectListener: Observable<
    OnCreateProjectSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProject {
        onCreateProject {
          __typename
          id
          title
          status
          startDate
          Estimate
          TimeRemaining
          stories {
            __typename
            items {
              __typename
              id
              title
              status
              type
              startDate
              Estimate
              TimeRemaining
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateProjectSubscription>;

  OnUpdateProjectListener: Observable<
    OnUpdateProjectSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProject {
        onUpdateProject {
          __typename
          id
          title
          status
          startDate
          Estimate
          TimeRemaining
          stories {
            __typename
            items {
              __typename
              id
              title
              status
              type
              startDate
              Estimate
              TimeRemaining
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateProjectSubscription>;

  OnDeleteProjectListener: Observable<
    OnDeleteProjectSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProject {
        onDeleteProject {
          __typename
          id
          title
          status
          startDate
          Estimate
          TimeRemaining
          stories {
            __typename
            items {
              __typename
              id
              title
              status
              type
              startDate
              Estimate
              TimeRemaining
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteProjectSubscription>;

  OnCreateStoryListener: Observable<OnCreateStorySubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateStory {
        onCreateStory {
          __typename
          id
          title
          status
          type
          startDate
          Estimate
          TimeRemaining
          project {
            __typename
            id
            title
            status
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
          subtasks {
            __typename
            id
            title
            status
            type
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateStorySubscription>;

  OnUpdateStoryListener: Observable<OnUpdateStorySubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateStory {
        onUpdateStory {
          __typename
          id
          title
          status
          type
          startDate
          Estimate
          TimeRemaining
          project {
            __typename
            id
            title
            status
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
          subtasks {
            __typename
            id
            title
            status
            type
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateStorySubscription>;

  OnDeleteStoryListener: Observable<OnDeleteStorySubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteStory {
        onDeleteStory {
          __typename
          id
          title
          status
          type
          startDate
          Estimate
          TimeRemaining
          project {
            __typename
            id
            title
            status
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
          subtasks {
            __typename
            id
            title
            status
            type
            startDate
            Estimate
            TimeRemaining
            stories {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteStorySubscription>;

  OnCreateSubTaskListener: Observable<
    OnCreateSubTaskSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSubTask {
        onCreateSubTask {
          __typename
          id
          title
          status
          type
          startDate
          Estimate
          TimeRemaining
          stories {
            __typename
            items {
              __typename
              id
              title
              status
              type
              startDate
              Estimate
              TimeRemaining
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateSubTaskSubscription>;

  OnUpdateSubTaskListener: Observable<
    OnUpdateSubTaskSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSubTask {
        onUpdateSubTask {
          __typename
          id
          title
          status
          type
          startDate
          Estimate
          TimeRemaining
          stories {
            __typename
            items {
              __typename
              id
              title
              status
              type
              startDate
              Estimate
              TimeRemaining
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateSubTaskSubscription>;

  OnDeleteSubTaskListener: Observable<
    OnDeleteSubTaskSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSubTask {
        onDeleteSubTask {
          __typename
          id
          title
          status
          type
          startDate
          Estimate
          TimeRemaining
          stories {
            __typename
            items {
              __typename
              id
              title
              status
              type
              startDate
              Estimate
              TimeRemaining
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteSubTaskSubscription>;
}
