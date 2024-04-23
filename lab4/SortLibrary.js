const ExchangeSort = {
    compareCount: 0,
    exchangeCount: 0,
  
   
    ascending: function(arr) {
      this.compareCount = 0;
      this.exchangeCount = 0;
  
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
   
          if (arr[j] === undefined && arr[j + 1] === undefined) continue;
          this.compareCount++;
          if (arr[j] === undefined || (arr[j + 1] !== undefined && arr[j] > arr[j + 1])) {
            this.exchangeCount++;
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
  
      console.log("Відсортований масив (за зростанням):", arr);
      console.log("К-сть порівнянь:", this.compareCount);
      console.log("К-сть обмінів:", this.exchangeCount);
    },
  

    descending: function(arr) {
      this.compareCount = 0;
      this.exchangeCount = 0;
  
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
         
          if (arr[j] === undefined && arr[j + 1] === undefined) continue;
          this.compareCount++;
          if (arr[j] === undefined || (arr[j + 1] !== undefined && arr[j] < arr[j + 1])) {
            this.exchangeCount++;
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
  
      console.log("Відсортований масив (за спаданням):", arr);
      console.log("К-сть порівнянь:", this.compareCount);
      console.log("К-сть обмінів:", this.exchangeCount);
    },
};

const SelectionSort = {
    compareCount: 0,
    exchangeCount: 0,
  
    
    ascending: function(arr) {
      this.compareCount = 0;
      this.exchangeCount = 0;
  
      for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
          this.compareCount++;
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }
        }
        if (minIndex !== i) {
          this.exchangeCount++;
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
      }

      
      let undefinedCount = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
          arr.splice(i, 1);
          undefinedCount++;
        }
      }
      arr.push(...Array(undefinedCount).fill(undefined));
  
      console.log("Відсортований масив (за зростанням):", arr);
      console.log("К-сть порівнянь:", this.compareCount);
      console.log("К-сть обмінів:", this.exchangeCount);
    },
  

    descending: function(arr) {
      this.compareCount = 0;
      this.exchangeCount = 0;
  
      for (let i = 0; i < arr.length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
          this.compareCount++;
          if (arr[j] > arr[maxIndex]) {
            maxIndex = j;
          }
        }
        if (maxIndex !== i) {
          this.exchangeCount++;
          [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
        }
      }

     
      let undefinedCount = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
          arr.splice(i, 1);
          undefinedCount++;
        }
      }
      arr.push(...Array(undefinedCount).fill(undefined));
  
      console.log("Відсортований масив (за спаданням):", arr);
      console.log("К-сть порівнянь:", this.compareCount);
      console.log("К-сть обмінів:", this.exchangeCount);
    }
};
  
const InsertionSort = {
    compareCount: 0,
    exchangeCount: 0,
  

    ascending: function(arr) {
      this.compareCount = 0;
      this.exchangeCount = 0;
      
      const undefinedValues = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
          undefinedValues.push(arr[i]);
          arr.splice(i, 1);
          i--; 
        }
      }

      for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        this.compareCount++;
        while (j >= 0 && arr[j] > current) {
          arr[j + 1] = arr[j];
          j--;
          this.compareCount++;
          this.exchangeCount++;
        }
        arr[j + 1] = current;
      }
      
      arr.push(...undefinedValues); 
  
      console.log("Відсортований масив (за зростанням):", arr);
      console.log("К-сть порівнянь:", this.compareCount);
      console.log("К-сть обмінів:", this.exchangeCount);
    },
  

    descending: function(arr) {
      this.compareCount = 0;
      this.exchangeCount = 0;
  
      const undefinedValues = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
          undefinedValues.push(arr[i]);
          arr.splice(i, 1);
          i--; 
        }
      }

      for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        this.compareCount++;
        while (j >= 0 && arr[j] < current) {
          arr[j + 1] = arr[j];
          j--;
          this.compareCount++;
          this.exchangeCount++;
        }
        arr[j + 1] = current;
      }
      
      arr.push(...undefinedValues); 
  
      console.log("Відсортований масив (за спаданням):", arr);
      console.log("К-сть порівнянь:", this.compareCount);
      console.log("К-сть обмінів:", this.exchangeCount);
    }
}; 

const ShellSort = {
    compareCount: 0,
    exchangeCount: 0,
  

    ascending: function(arr) {
      this.compareCount = 0;
      this.exchangeCount = 0;
      
      const undefinedValues = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
          undefinedValues.push(arr[i]);
          arr.splice(i, 1);
          i--; 
        }
      }

      let n = arr.length;
      for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
          let temp = arr[i];
          let j;
          this.compareCount++;
          for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
            this.exchangeCount++;
            arr[j] = arr[j - gap];
          }
          arr[j] = temp;
        }
      }
      
      arr.push(...undefinedValues); 
  
      console.log("Відсортований масив (за зростанням):", arr);
      console.log("К-сть порівнянь:", this.compareCount);
      console.log("К-сть обмінів:", this.exchangeCount);
    },
  

    descending: function(arr) {
      this.compareCount = 0;
      this.exchangeCount = 0;
      
      const undefinedValues = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
          undefinedValues.push(arr[i]);
          arr.splice(i, 1);
          i--; 
        }
      }

      let n = arr.length;
      for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
          let temp = arr[i];
          let j;
          this.compareCount++;
          for (j = i; j >= gap && arr[j - gap] < temp; j -= gap) {
            this.exchangeCount++;
            arr[j] = arr[j - gap];
          }
          arr[j] = temp;
        }
      }
      
      arr.push(...undefinedValues); 
  
      console.log("Відсортований масив (за спаданням):", arr);
      console.log("К-сть порівнянь:", this.compareCount);
      console.log("К-сть обмінів:", this.exchangeCount);
    }
};
  
  const QuickSort = {
    compareCount: 0,
    exchangeCount: 0,
  
    
    ascending: function(arr) {
      this.compareCount = 0;
      this.exchangeCount = 0;
      const undefinedValues = [];
      arr.forEach((value, index) => {
        if (value === undefined) {
          undefinedValues.push(index);
        }
      });
      this.quickSort(arr, 0, arr.length - 1, true);
      undefinedValues.forEach(index => {
        arr.splice(index, 1);
      });
      console.log("Відсортований масив (за зростанням):", arr);
      console.log("К-сть порівнянь:", this.compareCount);
      console.log("К-сть обмінів:", this.exchangeCount);
    },
  
    
    descending: function(arr) {
      this.compareCount = 0;
      this.exchangeCount = 0;
      const undefinedValues = [];
      arr.forEach((value, index) => {
        if (value === undefined) {
          undefinedValues.push(index);
        }
      });
      this.quickSort(arr, 0, arr.length - 1, false);
      undefinedValues.forEach(index => {
        arr.splice(index, 1);
      });
      console.log("Відсортований масив (за спаданням):", arr);
      console.log("К-сть порівнянь:", this.compareCount);
      console.log("К-сть обмінів:", this.exchangeCount);
    },
  
    
    quickSort: function(arr, low, high, ascending) {
      if (low < high) {
        let pi = this.partition(arr, low, high, ascending);
  
        this.quickSort(arr, low, pi - 1, ascending);
        this.quickSort(arr, pi + 1, high, ascending);
      }
    },
  
    
    partition: function(arr, low, high, ascending) {
      let pivot = arr[high];
      let i = low - 1;
  
      for (let j = low; j <= high - 1; j++) {
        this.compareCount++;
        if ((ascending && arr[j] < pivot) || (!ascending && arr[j] > pivot)) {
          i++;
          this.exchangeCount++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
      this.exchangeCount++;
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      return i + 1;
    },
};

  
