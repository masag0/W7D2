export const fetchSteps = () => {
  return $.ajax({
    url: 'api/todos',
    method: 'GET',
    dataType: 'json'
  });
};

export const createStep = (step) => {
  return $.ajax({
    url: 'api/steps',
    method: 'POST',
    data: { step: step },
    dataType: 'json'
  });
};

export const updateStep = (step) => {
  return $.ajax({
    url: `api/steps/${step.id}`,
    method: 'PATCH',
    data: { step: step },
    dataType: 'json'
  });
};

export const deleteStep = (id) => {
  console.log(id);
  return $.ajax({
    url: `api/steps/${id}`,
    method: 'DELETE',
  });
};


